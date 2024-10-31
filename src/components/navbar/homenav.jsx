import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Homenav = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: '100%',
		opacity: 0.1,
		backgroundColor: 'rgb(255, 255, 255)',
	});
	const [hovering, setHovering] = useState(false);

	return (
		<div className="invert dark:invert-0 fixed top-0 left-0 w-full flex items-center justify-center py-3 z-30">
			<motion.ul
				className="select-none relative bg-black/90 backdrop-blur-[10px] flex w-fit rounded-full border border-gray-500 transition-all duration-500"
				onMouseLeave={() => {
					setHovering(false);
					setPosition({
						left: 0,
						width: '100%',
						opacity: 0.1,
						backgroundColor: 'rgb(255, 255, 255)',
					});
				}}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }} 
				transition={{ type: "spring", stiffness: 80, damping: 15 }}
			>
				<Tab targetId="home" setPosition={setPosition} setHovering={setHovering}>
					Home
				</Tab>
				<Tab targetId="about" setPosition={setPosition} setHovering={setHovering}>
					About
				</Tab>
				<Tab targetId="skills" setPosition={setPosition} setHovering={setHovering}>
					Skills
				</Tab>
				<Tab targetId="contact" setPosition={setPosition} setHovering={setHovering}>
					Contact
				</Tab>
				<Cursor position={position} />
			</motion.ul>
		</div>
	);
};

const Tab = ({ children, targetId, setPosition, setHovering }) => {
	const ref = useRef(null);

	const handleClick = () => {
		const section = document.getElementById(targetId);
		if (section) section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<li
			ref={ref}
			data-id={targetId}
			onClick={handleClick}
			onMouseEnter={() => {
				if (ref.current) {
					const { offsetWidth, offsetLeft } = ref.current;
					setPosition({
						left: offsetLeft,
						width: offsetWidth,
						opacity: 1,
						backgroundColor: 'rgba(255, 255, 255, 1)',
					});
					setHovering(true);
				}
			}}
			className="relative z-10 cursor-pointer text-white mix-blend-difference px-2 py-2 sm:px-3 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base transition-all duration-300"
		>
			{children}
		</li>
	);
};

const Cursor = ({ position }) => (
	<motion.li
		className="absolute z-0 h-full rounded-full"
		animate={{
			left: position.left,
			width: position.width,
			opacity: position.opacity,
			backgroundColor: position.backgroundColor,
		}}
		transition={{ type: "spring", stiffness: 300, damping: 30 }}
		style={{ top: 0 }}
	/>
);

export default Homenav;

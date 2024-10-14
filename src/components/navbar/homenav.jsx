import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Homenav = () => {
	const [position, setPosition] = useState({ left: 0, width: '100%', opacity: .1, backgroundColor: 'rgb(255, 255, 255)' }); 
	const [hovering, setHovering] = useState(false); 

	return (
		<div className="fixed top-0 left-0 w-full flex items-center justify-center py-3 z-30 ">
			<ul
				className="relative bg-black/30 backdrop-blur-md flex w-fit rounded-full border border-gray-500 transition-all duration-500"
				onMouseLeave={() => {
					setHovering(false);
					setPosition({ left: 0, width: '100%', opacity: .1, backgroundColor: 'rgb(255, 255, 255)' }); 
				}}
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
			</ul>
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
					setPosition({ left: offsetLeft, width: offsetWidth, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 1)' }); // Full brightness on hover
					setHovering(true); 
				}
			}}
			className="relative z-10 cursor-pointer text-white mix-blend-difference px-2 py-2 sm:px-3  sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base transition-all duration-300"
		>
			{children}
		</li>
	);
};

const Cursor = ({ position }) => (
	<motion.li
		className="absolute z-0 h-full rounded-full " // Smooth transitions
		animate={{
			left: position.left,
			width: position.width,
			opacity: position.opacity,
			backgroundColor: position.backgroundColor, // Use backgroundColor from position
		}}
		transition={{ type: "spring", stiffness: 300, damping: 30 }}
		style={{ top: 0 }}
	/>
);

export default Homenav;

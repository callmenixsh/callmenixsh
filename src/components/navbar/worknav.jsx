import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Worknav = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: "100%",
		opacity: 0.1,
		backgroundColor: "rgb(255, 255, 255)",
	});
	const location = useLocation();

	useEffect(() => {
		const activeTab = document.querySelector(
			`[data-id="${location.pathname}"]`
		);
		if (activeTab) {
			const { offsetWidth, offsetLeft } = activeTab;
			setPosition({
				left: offsetLeft,
				width: offsetWidth,
				opacity: 1,
				backgroundColor: "rgba(255, 255, 255, 1)",
			});
		}
	}, [location.pathname]);

	const handleMouseLeave = () => {
		const activeTab = document.querySelector(
			`[data-id="${location.pathname}"]`
		);
		if (activeTab) {
			const { offsetWidth, offsetLeft } = activeTab;
			setPosition({
				left: offsetLeft,
				width: offsetWidth,
				opacity: 1,
				backgroundColor: "rgba(255, 255, 255, 1)",
			});
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full flex items-center justify-center py-3 z-30 ">
			<ul
				className="relative bg-teal-900/30 backdrop-blur-md flex w-fit rounded-full border border-gray-500 transition-all duration-500"
				onMouseLeave={handleMouseLeave} // Call handleMouseLeave on mouse leave
			>
				<Tab targetPath="/" setPosition={setPosition}>
					Portfolio
				</Tab>
				<Tab targetPath="/projects" setPosition={setPosition}>
					Projects
				</Tab>
				<Tab targetPath="/minis" setPosition={setPosition}>
					Minis
				</Tab>
				<Tab targetPath="/experience" setPosition={setPosition}>
					Experience
				</Tab>
				<Cursor position={position} />
			</ul>
		</div>
	);
};

const Tab = ({ children, targetPath, setPosition }) => {
	const ref = useRef(null);

	return (
		<Link
			to={targetPath}
			className="w-full h-full flex items-center justify-center"
		>
			<li
				ref={ref}
				data-id={targetPath}
				onMouseEnter={() => {
					if (ref.current) {
						const { offsetWidth, offsetLeft } = ref.current;
						setPosition({
							left: offsetLeft,
							width: offsetWidth,
							opacity: 1,
							backgroundColor: "rgba(255, 255, 255, 1)",
						});
					}
				}}
				className="relative z-10 cursor-pointer text-white mix-blend-difference px-2 py-2 sm:px-3 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base transition-all duration-300"
			>
				{children}
			</li>
		</Link>
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

export default Worknav;

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Worknav = ({ setActiveComponent }) => {
	const [position, setPosition] = useState({
		left: 0,
		width: "100%",
		opacity: 0.1,
		backgroundColor: "rgb(255, 255, 255)",
	});
	const [activeTab, setActiveTab] = useState("MajorProject");

	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }); 
	}, [pathname]);

	useEffect(() => {
		setActiveComponent("MajorProject");
		const initialTab = document.querySelector(`[data-id="MajorProject"]`);
		if (initialTab) {
			const { offsetWidth, offsetLeft } = initialTab;
			setPosition({
				left: offsetLeft,
				width: offsetWidth,
				opacity: 1,
				backgroundColor: "rgba(255, 255, 255, 1)",
			});
		}
	}, [setActiveComponent]);

	const handleMouseLeave = () => {
		const activeElement = document.querySelector(`[data-id="${activeTab}"]`);
		if (activeElement) {
			const { offsetWidth, offsetLeft } = activeElement;
			setPosition({
				left: offsetLeft,
				width: offsetWidth,
				opacity: 1,
				backgroundColor: "rgba(255, 255, 255, 1)",
			});
		}
	};

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
		setActiveComponent(tabName);
		window.scrollTo({ top: 0, behavior: 'smooth' }); 
	};

	return (
		<motion.div
			className="fixed top-0 left-0 w-full flex items-center justify-center py-3 z-30"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 80, damping: 15 }}
		>

			<Link className="invert dark:invert-0 fixed top-3 left-4 flex px-2 py-2.5 rounded-2xl bg-white text-black text-xs sm:text-sm lg:text-base transition-all duration-300"
			to="/">
				Portfolio
			</Link>

			<ul
				className="relative select-none invert dark:invert-0 bg-black/90 backdrop-blur-md flex w-fit rounded-full border border-white border-gray-500 transition-all duration-500"
				onMouseLeave={handleMouseLeave}
			>
				<Tab
					name="MiniProject"
					setPosition={setPosition}
					onClick={() => handleTabClick("MiniProject")}
				>
					Minis
				</Tab>
				<Tab
					name="MajorProject"
					setPosition={setPosition}
					onClick={() => handleTabClick("MajorProject")}
				>
					Projects
				</Tab>
				<Tab
					name="Experiences"
					setPosition={setPosition}
					onClick={() => handleTabClick("Experiences")}
				>
					Experiences
				</Tab>

				<Cursor position={position} />
			</ul>
		</motion.div>
	);
};

const Tab = ({ children, name, to, setPosition, onClick }) => {
	const ref = useRef(null);

	const handleCursorEnter = () => {
		if (ref.current) {
			const { offsetWidth, offsetLeft } = ref.current;
			setPosition({
				left: offsetLeft,
				width: offsetWidth,
				opacity: 1,
				backgroundColor: "rgba(255, 255, 255, 1)",
			});
		}
	};

	return to ? (
		<Link
			to={to}
			className="w-full h-full flex items-center justify-center"
			onClick={onClick}
		>
			<li
				ref={ref}
				data-id={name}
				onMouseEnter={handleCursorEnter}
				className="relative z-10 cursor-pointer text-white mix-blend-difference px-2 py-2 sm:px-3 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base transition-all duration-300"
			>
				{children}
			</li>
		</Link>
	) : (
		<li
			ref={ref}
			data-id={name}
			onMouseEnter={handleCursorEnter}
			onClick={onClick}
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

export default Worknav;

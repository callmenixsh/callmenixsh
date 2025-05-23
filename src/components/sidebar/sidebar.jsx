import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import confetti from "canvas-confetti";
import "../helper.css";
import resume from "../../assets/content/cv.pdf";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef();

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
		return () => (document.body.style.overflow = "auto");
	}, [isOpen]);

	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Nixsh_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		const count = 25;
		const defaults = { origin: { y: 0 } };
		const rect = buttonRef.current.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top;

		for (let i = 0; i < count; i++) {
			confetti({
				...defaults,
				angle: Math.random() * 360,
				spread: Math.random() * 300,
				startVelocity: Math.random() * 1 + 10,
				decay: 0.95,
				scalar: Math.random() * 1 + 0.5,
				origin: {
					x: x / window.innerWidth,
					y: (y + window.scrollY) / window.innerHeight,
				},
			});
		}

		setIsOpen(false);
	};

	return (
		<>
			<button
				className="sidebar-toggle absolute right-2 top-3 z-40"
				onClick={toggleSidebar}
			>
				<FaBars className="sidebarOpen-btn fixed right-3 top-4 transition-all size-6 sm:size-8 lg:size-10 duration-300 hover:scale-105 text-black dark:text-white" />
			</button>

			<div
				className={`sidebar-overlay fixed inset-0 z-50 flex justify-center bg-white/80 dark:bg-black/70 backdrop-blur-sm transition-transform duration-300 ${
					isOpen ? "translate-y-0" : "-translate-y-[100%]"
				}`}
			>
				<div className="sidebar-content h-auto flex flex-col lg:flex-row items-center justify-start gap-16 p-10 overflow-y-auto w-full max-w-7xl transition-all duration-300 text-black dark:text-white">
					<button className="sidebarClose-btn" onClick={toggleSidebar}>
						<IoCloseSharp className="fixed right-1 top-2 transition-all duration-300 size-8 sm:size-12 lg:size-16 hover:scale-110 hover:rotate-[180deg] text-black dark:text-white" />
					</button>

					<div className="lg:w-4/6 flex flex-col gap-10 max-w-2xl lg:max-w-5xl transition-all duration-300">
						<div>
							<p className="text-xl sm:text-2xl lg:text-4xl gradient-text font-bold transition-all duration-300">
								Welcome to my portfolio!
							</p>
							<p className="pt-4 text-sm lg:text-xl p-2 transition-all duration-300">
								Discover my skills, learn more about me, and explore my full
								portfolio. You can view a comprehensive list of all my projects,
								find my contact information, download my resume, and connect
								with me on social media.
							</p>
						</div>

						<div className="flex flex-col">
							<p className="lg:text-2xl pb-3 hidden lg:block">
								Connect with me on:
							</p>
							<div className="social-icons flex gap-5 lg:gap-0 lg:flex-row justify-center lg:justify-around transition-all duration-300">
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=callmenixsh@gmail.com&su=Subject&body=Hi%20Nixsh!"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FiMail className="size-7 lg:size-12 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
								</a>

								<a
									href="https://www.linkedin.com/in/callmenixsh/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin className="size-7 lg:size-12 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
								</a>
								<a
									href="https://github.com/callmenixsh"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub className="size-7 lg:size-12 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
								</a>
								{/* <a
                  href="https://instagram.com/callmenixsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="size-7 lg:size-12 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
                </a> */}
								<a
									href="https://x.com/callmenixsh"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaXTwitter className="size-7 lg:size-12 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-row lg:flex-col min-w-fit sm:justify-around lg:justify-center items-center lg:w-2/6 gap-10 transition-all">
						<div className="quick-links">
							<h3 className="text-xl sm:text-2xl lg:text-4xl gradient-text font-bold text-nowrap">
								Quick Links
							</h3>
							<ul className="flex flex-col lg:pt-6 gap-5 min-w-5">
								<li>
									<Link
										to="/"
										className="underline sm:text-lg lg:text-2xl duration-300 hover:text-gradient hover:font-bold"
										onClick={toggleSidebar}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/projects"
										className="underline sm:text-lg lg:text-2xl duration-300 hover:text-gradient hover:font-bold"
										onClick={toggleSidebar}
									>
										My Works
									</Link>
								</li>
								<li>
									<Link
										to="/blogs"
										className="underline sm:text-lg lg:text-2xl duration-300 hover:text-gradient hover:font-bold"
										onClick={toggleSidebar}
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>

						<button
							ref={buttonRef}
							onClick={downloadResume}
							className="pressablebtn resume-btn flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-3 lg:px-8 lg:py-4 rounded-xl text-white font-bold text-xs sm:text-sm lg:text-xl cursor-pointer text-center border-none bg-gradient-to-r from-[#25aae1] via-[#40e495] to-[#2bb673] bg-[length:500%_100%] hover:shadow-[0_4px_15px_rgba(49,196,190,0.75)] transition-all duration-300 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r select-none"
						>
							My Resume <FaDownload className="btn-icon" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import Contactme from "./contactme";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const footer = () => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="none"
					stroke="#FFFFFF"
					strokeWidth="3"
					d="M0,256L80,266.7C160,277,320,299,480,288C640,277,800,235,960,224C1120,213,1280,235,1360,245.3L1440,256"
				/>
				<path
					fill="#090314"
					fillOpacity="1"
					d="M0,256L80,266.7C160,277,320,299,480,288C640,277,800,235,960,224C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				/>
			</svg>

			<footer className="bg-[#0D051E]/70 text-white py-10 relative">
				<Contactme />
				<div className="flex relative z-10  text-center flex-col items-center">
					<div className="flex w-full justify-center items-center h-20 sm:my-10 lg:my-12 xl:my-16">
						<h2 className="absolute text-[2.4rem] sm:text-7xl lg:text-8xl xl:text-9xl font-Koho text-nowrap overflow-hidden font-bold opacity-15 transition-all duration-300">
							HAVE A NICE DAY
						</h2>
						<p className="absolute text-xs sm:text-sm lg:text-lg xl:text-xl transition-all duration-300">
							Crafted with 🖤 by Nishant
						</p>
					</div>

					<div className="mt-4">
						<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient transition-all duration-300">
							Explore
						</h3>
						<ul className="flex sm:pt-4 lg:pt-6 gap-5 lg:gap-16 min-w-5 justify-center">
							<li>
								<Link
									to="/"
									className=" text-xs sm:text-lg lg:text-2xl duration-200 hover:text-gradient hover:font-bold"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/projects"
									className=" text-xs sm:text-lg lg:text-2xl duration-200 hover:text-gradient hover:font-bold"
								>
									My Works
								</Link>
							</li>
							<li>
								<Link
									to="/blogs"
									className=" text-xs sm:text-lg lg:text-2xl duration-200 hover:text-gradient hover:font-bold"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex justify-center gap-6 mt-5">
						<a
							href="mailto:callmenixsh@gmail.com?subject=Portfolio Inquiry&body=Hi Nixsh,"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiMail className="size-6 lg:size-10 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
						</a>
						<a
							href="https://www.linkedin.com/in/callmenixsh/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="size-6 lg:size-10 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
						</a>
						<a
							href="https://github.com/callmenixsh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="size-6 lg:size-10 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
						</a>
						<a
							href="https://instagram.com/callmenixsh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="size-6 lg:size-10 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
						</a>
						<a
							href="https://x.com/callmenixsh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaXTwitter className="size-6 lg:size-10 hover:text-cyan-300 hover:scale-110 transition duration-300 hover:-rotate-12 hover:neon-shadow" />
						</a>
					</div>
					<div className=" flex flex-col justify-center items-center border-t lg:border-t-2 mt-5 w-11/12 xl:w-[80rem]">
						<p className="mt-4 text-[.4rem] sm:text-xs">
							© 2024 callmenixsh. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default footer;

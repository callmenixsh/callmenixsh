import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaRegShareFromSquare, FaCode } from "react-icons/fa6";
import Typeraijin from "../../assets/content/typeraijin.mp4";

const TopProjects = () => {
	const techStack = ["React", "Express", "Socket.io", "Node.js", "CSS"];

	return (
		<div className="flex flex-col items-center justify-center mt-36">
			{/* Title Section */}
			<div className="w-full lg:w-[1000px] relative flex flex-col mx-5 justify-center items-center mb-10">
				<div className="flex flex-row text-2xl sm:text-3xl lg:text-4xl text-white my-6 w-full justify-center underline decoration-black dark:decoration-white text-cyan-400">
					<span className=" text-black dark:text-white">My</span>
					<span className="text-gradient font-italic font-bold"> Work</span>
				</div>

				<Link
					className="sm:absolute right-4 lg:right-10 lg:right-24"
					to="/projects"
				>
					<div className="relative group p-2 sm:p-3 rounded-xl overflow-hidden flex items-center justify-center border border-black dark:border-white text-black font-semibold dark:text-white uppercase w-48 sm:w-52 text-nowrap hover:bg-cyan-500/40 hover:drop-shadow transition-all duration-300 pointer select-none">
						<div className="flex items-center translate-x-[16px] gap-4 group-hover:-translate-x-6 transition-all duration-300 text-sm sm:text-base">
							<p>See all my projects</p>
							<p>
								<FaArrowRight />
							</p>
						</div>
					</div>
				</Link>
			</div>

			{/* Project Details Section */}
			<div className="mx-8 ">
				<div className="flex flex-col mb-5 text-black dark:text-white ">
					<div className="flex items-end text-right ">
						<div className="text-gradient text-xs sm:text-sm lg:text-base transition-all">
							01
						</div>
						<div className="text-xl sm:text-2xl lg:text-3xl transition-all">
							TypeRaijin
						</div>
					</div>
					<div className="ml-5 opacity-50 text-xs sm:text-sm lg:text-base transition-all">
						Multiplayer Typing game
					</div>
				</div>

				<div className=" max-[420px]:w-[300px] w-[400px] sm:w-[600px] lg:w-[800px] content flex flex-col border-2 border-black dark:border-white p-4 gap-4 rounded-xl items-center justify-center">
					{/* Video Section */}
					<video
						className="max-[420px]:w-[300px] max-[420px]:w-[300px] h-[200px] w-[400px]  sm:h-[300px] sm:w-[600px] lg:h-[400px] lg:w-[800px] object-cover bg-white rounded-xl border border-black dark:border-white"
						controls
						muted
						autoPlay
						loop
					>
						<source src={Typeraijin} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<div className="flex flex-col md:flex-row gap-4 items-between justify-between  text-black dark:text-white ">
						<div className="text-sm md:text-base relative border border-black dark:border-white p-4  bg-cyan-100/50 rounded-md md:w-7/12 md:hover:-translate-y-[50px] md:hover:translate-x-[164px] md:hover:scale-[1.75] hover:bg-white/80 dark:hover:bg-black/80  transition-all duration-300">
							Typeraijin is a fast-paced multiplayer typing game where players
							compete to type words accurately and quickly. Developed using
							React, Express, and Socket.io for real-time gameplay, it supports
							upto four-player rooms for competitive fun.
						</div>

						<div className="text-sm lg:text-base flex flex-col sm:flex-row md:flex-col gap-4 justify-around md:w-5/12 w-full">
							<div className="w-full sm:w-6/12  md:w-full h-2/3 group border border-black dark:border-white p-4  bg-cyan-100/50 rounded-md hover:scale-[.99] transition-all duration-300 text-center items-center flex justify-center">
								Techstack
								<div className="border-2 border-black dark:border-white opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-[0px] right-0 w-full bg-white dark:bg-black p-4 rounded-md shadow-lg">
									<ul className="list-disc list-inside">
										{techStack.map((tech, index) => (
											<li key={index}>{tech}</li>
										))}
									</ul>
								</div>
							</div>

							<div className="w-full sm:w-6/12  md:w-full flex justify-around gap-4 text-sm lg:text-base">
								<a  href="https://typeraijin.netlify.app" target="_blank" className="border border-black dark:border-white p-3 flex items-center justify-around gap-2 bg-cyan-100/50 rounded-md w-4/6 pointer select-none hover:bg-cyan-100/90 hover:scale-105 hover:text-black transition-all duration-300">
									<div>Live Demo</div>
									<div>
										<FaRegShareFromSquare />
									</div>
								</a>
								<a href="https://github.com/callmenixsh/TypeRaijin" target="_blank" className="border border-black dark:border-white p-3 flex items-center justify-around gap-2 bg-cyan-100/50 rounded-md w-3/6 pointer select-none hover:bg-cyan-100/90 hover:text-black hover:scale-105 transition-all duration-300">
									<div>Repo</div>
									<div>
										<FaCode />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopProjects;

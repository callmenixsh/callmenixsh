import React from "react";
import { FaRegShareFromSquare, FaCode } from "react-icons/fa6";
import Typeraijin from "../../assets/content/typeraijin.mp4";

// Array to store project data
const projects = [
	{
		id: 1,
		videoSrc: Typeraijin,
		liveDemo: "https://typeraijin.netlify.app/",
		repoLink: "https://github.com/callmenixsh/TypeRaijin",
	}
];

const MajorProject = () => {
	return (
		<div className="flex flex-col justify-center items-center my-28">
			<h1 className="text-3xl underline pb-14 text-black dark:text-white">Projects</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:mx-10">
				{projects.map((project) => (
					<div
						key={project.id}
						className="w-[300px] sm:w-[400px] content flex flex-col border-2 p-4 gap-4 rounded-xl items-center justify-center text-black dark:text-white border-black dark:border-white"
					>
						TYPERAIJIN
						{/* Video Section */}
						<video
							className="h-[180px] w-[300px] sm:h-[250px] sm:w-[400px] object-cover bg-white rounded-xl border border-black dark:border-white"
							muted
							autoPlay
							loop
						>
							<source src={project.videoSrc} type="video/mp4" />
							Your browser does not support the video tag.
						</video>

						{/* Buttons Section */}
						<div className="w-[300px] sm:w-[400px] px-4 flex flex-row gap-4 items-between justify-between">
							<a
								href={project.liveDemo}
								target="_blank"
								rel="noopener noreferrer"
								className="border-2 border-black dark:border-white p-3 flex items-center justify-around gap-2 text-black dark:text-white bg-cyan-100/50 rounded-md w-4/6 pointer select-none hover:bg-cyan-100/90 hover:scale-105 hover:text-black transition-all duration-300"
							>
								<div>Live Demo</div>
								<FaRegShareFromSquare />
							</a>

							<a
								href={project.repoLink}
								target="_blank"
								rel="noopener noreferrer"
								className="border-2 border-black dark:border-white p-3 flex items-center justify-around gap-2 text-black dark:text-white bg-cyan-100/50 rounded-md w-3/6 pointer select-none hover:bg-cyan-100/90 hover:scale-105 hover:text-black transition-all duration-300"
							>
								<div>Repo</div>
								<FaCode />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MajorProject;

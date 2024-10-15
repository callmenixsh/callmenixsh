import React from "react";
import { Link } from "react-router-dom";
import { MdSmsFailed } from "react-icons/md";

const nopage = () => {
	return (
		<section
			id="nopage"
			className="h-screen bg-black-900 text-white flex flex-col items-center justify-center"
		>
			<div className="fail text-rose-900 animate-pulse flex flex-col items-center">

			<MdSmsFailed className="size-10 sm:size-16 transition-all duration:500"/>
			<h1 className="text-2xl sm:text-4xl font-bold transition-all duration:500">Page Not Found</h1>
			</div>

			<div className="navigate flex flex-col items-center">
				<h3 className="text-xl sm:text-3xl pt-8  font-bold ">Evacuate to</h3>
				<ul className="flex flex-col items-center sm:flex-row pt-3 sm:pt-6 gap-4 sm:gap-10 transition-all duration:500 ">
					<li>
						<Link
							to="/"
							className="underline text-lg lg:text-2xl duration-200 hover:text-gradient hover:font-bold"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/projects"
							className="underline text-lg lg:text-2xl duration-200 hover:text-gradient hover:font-bold"
						>
							My Works
						</Link>
					</li>
					<li>
						<Link
							to="/blogs"
							className="underline text-lg lg:text-2xl duration-200 hover:text-gradient hover:font-bold"
						>
							Blog
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default nopage;

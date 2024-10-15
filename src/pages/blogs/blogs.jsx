import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";

const blogs = () => {
	return (
		<>
			<Sidebar />
			<div className="flex flex-col justify-center items-center mt-24">
				This is a long term Goal
                For now check out 
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
				</ul>
			</div>
			<Footer />
		</>
	);
};

export default blogs;

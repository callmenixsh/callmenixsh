import React, { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

import StretchyString from "../funstuff/rope";

const qualifications = [
	{
		title: "B.Tech - CSE (2022-2026)",
		institute: "HMR Institute of Technology and Management",
		instituteUrl: "https://www.hmritm.ac.in/",
		affiliation: {
			name: "GGSIPU",
			url: "http://www.ipu.ac.in/",
		},
		status: "Pursuing",
		resultUrl: "https://www.ipuranklist.com/student/35813302722",
	},
	{
		title: "12th Standard (2021)",
		institute: "Apex Public School",
		instituteUrl: "https://apexpublicschool.in/",
		status: "Qualified - 83.6%",
	},
	{
		title: "10th Standard (2019)",
		institute: "Apex Public School",
		instituteUrl: "https://apexpublicschool.in/",
		status: "Qualified - 89.8%",
	},
];

const EducationalQualifications = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
		return () => (document.body.style.overflow = "auto");
	}, [isOpen]);

	return (
		<>
			<div className="w-full justify-center flex my-20 text-black dark:text-white">
				<button
					onClick={toggleMenu}
					className={`border-2 border-black dark:border-white dark:text-white font-semibold dark:font-normal px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105  active:scale-90 transition duration-300 ${
						isOpen ? "translate-y-[100vh]" : "translate-y-0"
					}`}
				>
					Educational Qualifications 
				</button>

				<div
					ref={menuRef}
					className={`fixed inset-x-0 bottom-0 dark:bg-black/80 border-t border-black dark:border-white shadow-lg z-50 rounded-t-lg max-h-[60vh] overflow-y-auto overflow-x-hidden p-4 transition-transform duration-300 ease-in-out ${
						isOpen ? "translate-y-0" : "translate-y-full"
					}`}
				>
					<div className="flex flex-col gap-4 mt-10">
						{qualifications.map((q, index) => (
							<div
								key={index}
								className="border border-black dark:border-white rounded p-5 group transition-all duration-300"
							>
								<div className="text-lg sm:text-xl lg:text-2xl">{q.title}</div>
								<div className="text-xs sm:text-sm lg:text-lg mt-2 group-hover:scale-110 group-hover:translate-x-[10vw] transition-all duration-300">
									<a
										href={q.instituteUrl}
										className="link  transition-transform duration-300"
										target="_blank"
										rel="noopener noreferrer"
									>
										{q.institute}
									</a>
									{q.affiliation && (
										<span className="text-nowrap">
											{"   "}[ affiliated with{" "}
											<a
												href={q.affiliation.url}
												className="link"
												target="_blank"
												rel="noopener noreferrer"
											>
												{q.affiliation.name}
											</a>{" "}
											]
										</span>
									)}
								</div>
								<div className="text-sm lg:text-lg group-hover:scale-110 group-hover:translate-x-[14vw] transition-all duration-300">
									{q.status}{" "}
									{q.resultUrl && (
										<a
											href={q.resultUrl}
											className="text-xs link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Detailed Result
										</a>
									)}
								</div>
							</div>
						))}
					</div>
					<button onClick={toggleMenu}>
						<IoCloseSharp className="absolute top-3 right-2 size-8" />
					</button>
				</div>
			</div>
			<StretchyString />
		</>
	);
};

export default EducationalQualifications;

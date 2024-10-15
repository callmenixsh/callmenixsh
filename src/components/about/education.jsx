import React, { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

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
		resultUrl: "https://www.ipusenpai.in/student/35813302722",
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

	// Close the menu if clicked outside
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
		<div className="w-full justify-center flex my-20 ">
			<button
				onClick={toggleMenu}
				className={`border border-white text-white px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105 active:scale-90 transition duration-300 ${
					isOpen ? "translate-y-[100vh]" : "translate-y-0"
				}`}
			>
				Educational Qualifications
			</button>

			<div
				ref={menuRef}
				className={`fixed inset-x-0 bottom-0 bg-black/80 border-t shadow-lg z-50 rounded-t-lg max-h-[60vh] overflow-y-auto p-4 transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-y-0" : "translate-y-full"
				}`}
			>
				<div className="flex flex-col gap-4 mt-10">
					{qualifications.map((q, index) => (
						<div key={index} className="border rounded p-5">
							<div className="text-lg sm:text-xl lg:text-2xl transition-all duration-300">{q.title}</div>
							<div className="text-xs sm:text-sm lg:text-lg transition-all duration-300">
								<a href={q.instituteUrl} className="link" target="_blank" rel="noopener noreferrer">
									{q.institute}
								</a>
								{q.affiliation && (
									<span className="text-nowrap">
										{"   "}
										 [ affiliated with{" "}
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
							<div className="text-sm lg:text-lg transition-all duration-300">
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
	);
};

export default EducationalQualifications;

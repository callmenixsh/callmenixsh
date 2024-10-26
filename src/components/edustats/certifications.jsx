import React, { useState } from "react";
import { motion } from "framer-motion";
import FUllstack from "../../assets/images/Fullstack.jpg";
import Azure from "../../assets/images/Azure.png";
import PowerBI from "../../assets/images/powerbi.png";

const Certifications = () => {
	const [selectedCert, setSelectedCert] = useState(null);

	const certificateData = [
		{
			name: "Cloud Computing and Azure ",
			company: "~ Microsoft",
			image: Azure,
		},
		{
			name: "Full-Stack Web Development",
			company: "~ Udemy",
			image: FUllstack,
		},
		{ name: "Power BI workshop", company: "~ HMRITM", image: PowerBI },
	];

	const handleClose = () => setSelectedCert(null);

	return (
		<div className=" flex flex-col mt-24 mx-5 justify-center items-center">
			<div className="w-full xl:w-[1300px] flex flex-col justify-center items-center">
				<p className="flex flex-row text-4xl text-white my-6 w-full justify-center">
					<span>My</span>
					<span className="text-gradient font-italic font-bold">
						{" "}
						Certifications
					</span>
				</p>

				<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6 mt-8 text-sm lg:text-base">
					{certificateData.map((cert, index) => (
						<div
							key={index}
							className="flex flex-col border p-4 rounded-md hover:scale-105 group transition-all duration-300"
						>
							<div className="font-bold group-hover:translate-x-5 transition-all">
								{cert.name}
							</div>
							<div className="text-gray-300 group-hover:translate-x-10 group-hover:text-cyan-500 transition-all">
								{cert.company}
							</div>
							{cert.image && (
								<button
									onClick={() => setSelectedCert(cert)}
									className="mt-2 bg-cyan-500/80 text-white py-1 px-4 rounded hover:bg-cyan-700 transition-all"
								>
									View Certificate
								</button>
							)}
						</div>
					))}
				</div>

				{selectedCert && (
					<div
						className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
						onClick={handleClose}
					>
						<motion.div
							className="relative bg-white p-6 rounded-md max-w-lg w-full"
							onClick={(e) => e.stopPropagation()}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
						>
							<img
								src={selectedCert.image}
								alt={selectedCert.name}
								className="w-full h-auto object-contain select-none pointer-events-none"
								style={{ userSelect: "none" }} // Prevent text selection
							/>
							<button
								onClick={handleClose}
								className="absolute top-2 right-2 text-black bg-gray-300 rounded-full px-3 py-1 hover:bg-gray-400"
							>
								✕
							</button>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Certifications;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FUllstack from "../../assets/images/Fullstack.jpg";
import Azure from "../../assets/images/Azure.png";
import PowerBI from "../../assets/images/powerbi.png";
import AIBeg from "../../assets/images/AIBeginners.png";
import AIGuide from "../../assets/images/AIguide.jpg";
import DSA from "../../assets/images/DS&A.png";
import CyberS from "../../assets/images/Cybersecurity.png";

const Certifications = () => {
	const [selectedCert, setSelectedCert] = useState(null);
	const canvasRef = useRef(null);

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

		{ name: "PowerBI Workshop", company: "~ HMRITM", image: PowerBI },
		{ name: "AI for Beginners", company: "~ HP Life", image: AIBeg },
		// { name: "Data Science & Analytics", company: "~ HP Life", image: DSA },
		{
			name: "Introduction To CyberSecurity",
			company: "~ HP Life",
			image: CyberS,
		},
		{ name: "Complete AI Guide", company: "~ Udemy", image: AIGuide },
	];

	useEffect(() => {
		if (selectedCert) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			const img = new Image();
			img.src = selectedCert.image;
			img.onload = () => {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);

				ctx.font = "160px Arial";
				ctx.fillStyle = "rgba(255, 255, 255, 0.24)";
				ctx.textAlign = "center";
				ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
				ctx.shadowBlur = 5;
				ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";

				const text = "@callmenixsh";
				ctx.save();
				ctx.translate(img.width / 2, img.height / 2);
				ctx.rotate(-Math.PI / 6);

				ctx.strokeText(text, 0, 0);
				ctx.fillText(text, 0, 0);
				ctx.restore();
			};
		}
	}, [selectedCert]);

	const handleClose = () => setSelectedCert(null);

	return (
		<div className="flex flex-col mt-24 mx-5 justify-center items-center">
			<div className="w-full xl:w-[1300px] flex flex-col justify-center items-center">
				<p className="flex flex-row text-4xl text-black dark:text-white my-6 w-full justify-center font-semibold">
					<span>My</span>
					<span className="text-gradient font-italic font-bold">
						{" "}
						Certifications
					</span>
				</p>

				<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6 mt-8 text-sm lg:text-base text-black dark:text-white">
					{certificateData.map((cert, index) => (
						<div
							key={index}
							className="flex flex-col border-2 border-black dark:border-white p-4 rounded-md hover:scale-105 group transition-all duration-300"
						>
							<div className="font-bold group-hover:translate-x-5 transition-all">
								{cert.name}
							</div>
							<div className="opacity-75 group-hover:translate-x-10 group-hover:text-cyan-500 group-hover:opacity-100 group-hover:font-semibold transition-all">
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
							<canvas
								ref={canvasRef}
								className="w-full h-auto object-contain select-none pointer-events-none"
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

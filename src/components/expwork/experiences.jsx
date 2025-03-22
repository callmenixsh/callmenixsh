import React, { useState, useEffect, useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { motion } from "framer-motion";
import p2tLogo from "../../assets/logos/peak2tails.png";
import p2tCert from "../../assets/images/Peak2Tails_Intern.png";

const experienceData = [
	{
		company: "Peak2Tails",
		logo: p2tLogo,
		role: "UI/UX Designer & Front-end Developer",
		duration: "Nov24 - Feb25",
		location: "Remote",
		certificate: p2tCert,
		details: [
			"Successfully created 25+ intuitive UI designs for multiple screens in a month.",
			"Completed wireframing, mockups, and prototyping to enhance user experience.",
			"Analyzed various requirements to ensure high project standards."
		]
	}
];

const Experiences = () => {
	const [showCertificate, setShowCertificate] = useState(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		if (showCertificate) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			const img = new Image();
			img.src = showCertificate;
			img.onload = () => {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
	
				ctx.font = "200px Arial";
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
	}, [showCertificate]);
	


	const handleClose = () => setShowCertificate(null);

	return (
		<div className="flex flex-col justify-center items-center my-28">
			<h1 className="text-3xl underline text-black dark:text-white">My Experience</h1>

			{experienceData.map((exp, index) => (
				<div key={index} className="flex flex-col justify-center items-between my-20 mx-5 border p-7 rounded-xl gap-5 bg-white/10 invert dark:invert-0">
					<div className="flex flex-row justify-between items-center">
						<div className="invert dark:invert-0 flex flex-row items-center justify-center gap-2 py-1 px-2 rounded-xl border bg-white text-black">
							<img className="w-28 bg-white p-2 rounded-xl" src={exp.logo} alt={`${exp.company} Logo`} />
							<div className="font-bold">{exp.company}</div>
						</div>
						<div className="bg-white/20 p-2 rounded-xl">{exp.duration}</div>
					</div>

					<div className="font-bold text-lg">{exp.role}</div>
					<div>
						<ul className="flex flex-col gap-2 list-disc list-inside">
							{exp.details.map((detail, idx) => (
								<li key={idx}>{detail}</li>
							))}
						</ul>
					</div>

					<div className="flex flex-row gap-10 justify-between">
						<div className="flex flex-row gap-5">
							<div className="flex flex-row justify-center items-center gap-2 bg-white/20 p-2 rounded-xl">
								<MdOutlineTimer />
								<div>4 months</div>
							</div>
							<div className="flex flex-row justify-center items-center gap-2 bg-white/20 p-2 rounded-xl">
								<CiLocationOn />
								<div>{exp.location}</div>
							</div>
						</div>
						<button
							onClick={() => setShowCertificate(exp.certificate)}
							className="bg-cyan-500/80 text-white py-1 px-2 rounded-xl hover:bg-cyan-700 transition-all"
						>
							Certificate
						</button>
					</div>
				</div>
			))}

			{showCertificate && (
				<div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={handleClose}>
					<motion.div
						className="relative bg-white p-6 rounded-md max-w-lg w-full"
						onClick={(e) => e.stopPropagation()}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
					>
						<canvas ref={canvasRef} className="w-full h-auto object-contain" />
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
	);
};

export default Experiences;
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Icons
import htmlIcon from "../../assets/logos/html.png";
import cssIcon from "../../assets/logos/css.png";
import jsIcon from "../../assets/logos/javasc.png";
import reactIcon from "../../assets/logos/react.png";
import nodeIcon from "../../assets/logos/node.png";
import mongodbIcon from "../../assets/logos/mongodb.png";
import expressIcon from "../../assets/logos/express.png";
import javaIcon from "../../assets/logos/java.png";
import pyIcon from "../../assets/logos/python.png";
import mysqlIcon from "../../assets/logos/mysql.png";
import cppIcon from "../../assets/logos/cpp.png";
import gsapIcon from "../../assets/logos/gsap.png";
import bootstrapIcon from "../../assets/logos/bootstrap.png";
import tailwindIcon from "../../assets/logos/tailwind.png";
import framerMotionIcon from "../../assets/logos/framer.png";
import figmaIcon from "../../assets/logos/figma.png";
import canvaIcon from "../../assets/logos/canva.png";
import gitIcon from "../../assets/logos/git.png";
import githubIcon from "../../assets/logos/github.png";
import netlifyIcon from "../../assets/logos/netlify.png";
import renderIcon from "../../assets/logos/render.png";
import githubPagesIcon from "../../assets/logos/github.png";

gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
	const getTranslateX = () => {
		const screenWidth = window.innerWidth;
		if (screenWidth >= 670) return "-210vw";
		if (screenWidth > 300) return "-510vw";
		return "-600vw";
	};

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#stackcontainer",
				start: "top top",
				end: "bottom top",
				scrub: 1,
				pin: true,
			},
		});

		tl.to("#techstack", {
			x: getTranslateX(),
			duration: 10,
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div id="stackcontainer" className="h-full flex flex-col overflow-hidden ">
			<div className="min-h-[10vh] text-3xl md:text-4xl text-center pt-24 text-black dark:text-white">
				Tech
				<p className="text-gradient font-bold font-italic">Stack</p>
			</div>

			<div
				id="techstack"
				className="flex justify-center items-center h-[80vh] w-[600vw] md:w-[300vw] border-box overflow-hidden "
			>
				<div
					id="currentstack"
					className="flex flex-col gap-[2vh] items-center w-[200vw] md:w-[100vw]"
				>
					<div className="flex gap-[2vw]">
						<Card icon={htmlIcon} label="HTML" />
						<Card icon={cssIcon} label="CSS" />
						<Card icon={jsIcon} label="JavaScript" />
					</div>

					<div className="flex gap-[2vw]">
						{/* <Card icon={mongodbIcon} label="MongoDB" />
						<Card icon={expressIcon} label="ExpressJS" /> */}
						<Card icon={reactIcon} label="ReactJS" />
						<Card icon={nodeIcon} label="NodeJS" />
					</div>

					<div className="flex gap-[2vw]">
						<Card icon={cppIcon} label="C++" />
						<Card icon={pyIcon} label="Python" />
						<Card icon={mysqlIcon} label="MySQL" />
					</div>
				</div>

				<div id="lib" className="flex w-[200vw] md:w-[100vw] justify-around ">
					<div className="flex items-center  gap-[2vw] ">
						<VerticalText text="LIBRARIES & FRAMEWORKS" />
						<div className="flex border-l p-[8vw] gap-[2vw] ">
							<div className="flex flex-col  gap-[2vw] ">
								<Card icon={gsapIcon} label="GSAP" />
								<Card icon={bootstrapIcon} label="Bootstrap" />
								<Card icon={tailwindIcon} label="Tailwind" />
							</div>
							<Card icon={framerMotionIcon} label="Framer Motion" />
						</div>
					</div>

					<div className="flex items-center">
						<VerticalText text="UI/UX Design" />
						<div className="flex flex-col  gap-[2vw]  border-l-2 border-cyan-800 dark:border-cyan-300 p-[8vw]">
							<Card icon={figmaIcon} label="Figma" />
							<Card icon={canvaIcon} label="Canva" />
						</div>
					</div>
				</div>

				<div id="dev" className="flex w-[200vw] md:w-[100vw] justify-around">
					<div className="flex items-center justify-center">
						<VerticalText text="VERSION CONTROL" />
						<div className="flex flex-col  gap-[2vw] border-l-2 border-cyan-800 dark:border-cyan-300 p-[8vw]">
							<Card icon={gitIcon} label="Git" />
							<Card icon={githubIcon} label="GitHub" />
						</div>
					</div>

					<div className="flex items-center justify-center">
						<VerticalText text="HOSTING & DEPLOYMENT" />
						<div className="flex flex-col gap-[2vw] border-l-2 border-cyan-800 dark:border-cyan-300 p-[8vw] ">
							<Card icon={netlifyIcon} label="Netlify" />
							<Card icon={renderIcon} label="Render" />
							<Card icon={githubPagesIcon} label="GitHub Pages" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card = ({ icon, label }) => (
<div className="group flex flex-col border-[.2vw] w-[22vw] h-[22vw] md:w-[12vw] md:h-[12vw] justify-center items-center p-[2vw] rounded-[1vw] border-teal-700 hover:border-black dark:hover:border-white hover:scale-105 transition-all duration-400 bg-black/10">
    <img
        src={icon}
        alt={`${label} icon`}
        className="w-[10vw] h-[10vw] md:w-[6vw] md:h-[6vw] object-contain drop-shadow-lg transition-all duration-800 group-hover:contrast-[300%] group-hover:grayscale group-hover:brightness-[60%] dark:group-hover:invert group-hover:drop-shadow-[0_4px_6px_rgba(2,25,25,0.8)] dark:group-hover:drop-shadow-[0_4px_6px_rgba(255,255,255,0.8)]"
    />
    <p className="text-[2.5vw] md:text-[1.5vw] text-nowrap text-black/40 group-hover:text-black dark:text-white/40 dark:group-hover:text-white transition-all duration-400">{label}</p>
</div>

);

const VerticalText = ({ text }) => (
	<div className="flex -rotate-90 max-w-[12vw] items-end justify-center">
		<p className="text-white text-[4vw] md:text-[2vw] text-nowrap ">{text}</p>
	</div>
);

export default Techstack;

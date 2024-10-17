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
import { transform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const getTranslateX = () => {
	const screenWidth = window.innerWidth;
	if (screenWidth >= 1300) return "-120%";
	if (screenWidth >= 920) return "-150%";
	if (screenWidth >= 720) return "-180%";
	if (screenWidth >= 620) return "-200%";
	if (screenWidth >= 550) return "-230%";
	if (screenWidth >= 470) return "-260%";
	if (screenWidth >= 410) return "-300%";
	if (screenWidth >= 380) return "-320%";
	if (screenWidth >= 360) return "-340%";
	if (screenWidth >= 340) return "-360%";
	if (screenWidth >= 320) return "-380%";
	if (screenWidth >= 300) return "-420%";
	return "-440%";
};
//if you see this please tell me a better solution until then o7

// console.log(getTranslateX())

const Techstack = () => {
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

		// Animating #techstack
		tl.to("#techstack", {
			x: getTranslateX(),
			duration: 2,
		});

		return () => {
			// Cleanup the ScrollTrigger instance on unmount
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<>
			<div
				id="stackcontainer"
				className="flex w-full flex-col justify-center overflow-visible h-screen border-b overflow-x-hidden "
			>
				<div className="scale-[.8] sm:scale-[.9] md:scale-100 lg:scale-[1.1] xl:scale-[1.2]  2xl:scale-[1.15] transition-all duration-300 underline text-cyan-500">
					{/* Title */}
					<p className="flex flex-row text-[4vh] text-white  mb-[2vh] w-full justify-center">
						<span>Tech</span>
						<span className="text-gradient font-italic font-bold">Stack</span>
					</p>

					{/* Tech Grid */}
					<div
						id="techstack"
						className="pt-[9vh] techstack flex flex-row gap-[60vw] sm:gap-[60vw]  translate-x-[5vw]  md:translate-x-[33vw] "
					>
						<div className="flex flex-col gap-y-[3vh] ">
							<div className="grid grid-cols-4 gap-[17vh] w-[40vh] ">
								<Card icon={htmlIcon} label="HTML" />
								<Card icon={cssIcon} label="CSS" />
								<Card icon={jsIcon} label="JavaScript" />
							</div>

							<div className="grid grid-cols-4 gap-[17vh] w-[40vh] ">
								<Card icon={mongodbIcon} label="MongoDB" />
								<Card icon={expressIcon} label="ExpressJS" />
								<Card icon={reactIcon} label="ReactJS" />
								<Card icon={nodeIcon} label="NodeJS" />
							</div>

							<div className="grid grid-cols-4 gap-[17vh]  w-[40vh]  ">
								<Card icon={cppIcon} label="C++" />
								<Card icon={javaIcon} label="Java" />
								<Card icon={mysqlIcon} label="MySQL" />
							</div>
						</div>

						{/* grid 2 */}

						<div className="flex gap-[20vw]">
							<div className="flex items-center ">
								<VerticalText text=" LIBRARIES & FRAMEWORKS" />
								<div className="flex flex-col gap-y-[3vh] h-full border-l pl-[5vh] ">
									<div className="grid grid-cols-2 gap-[17vh] w-[20vh]">
										<Card icon={gsapIcon} label="GSAP" />
										<Card icon={bootstrapIcon} label="Bootstrap" />
									</div>

									<div className="grid grid-cols-2 gap-[17vh]  w-[20vh]">
										<Card icon={tailwindIcon} label="Tailwind" />
									</div>

									<div className="grid grid-cols-2 gap-[17vh] w-[20vh]">
										<Card icon={framerMotionIcon} label="Framer Motion" />
									</div>
								</div>
							</div>
							{/* grid 3 */}
							<div className="flex items-center ">
								<VerticalText text="UI/UX Design" />
								<div className="flex flex-col h-full gap-y-[3vh] border-l pl-[5vh]  ">
									<div className="grid grid-cols-1 gap-[17vh]  w-[9vh]">
										<Card icon={figmaIcon} label="Figma" />
									</div>

									<div className="grid grid-cols-1 gap-[17vh] w-[9vh] ">
										<Card icon={canvaIcon} label="Canva" />
									</div>

									<div className="grid grid-cols-1 gap-[17vh] w-[9vh] ">
										{/* maybe will add more here */}
									</div>
								</div>
							</div>
							{/* grid 4 */}
							<div className="flex items-center ">
								<VerticalText text="VERSION CONTROL" />
								<div className="flex flex-col h-full gap-y-[3vh] border-l pl-[5vh]  ">
									<div className="grid grid-cols-1 gap-[17vh]  w-[9vh]">
										<Card icon={gitIcon} label="Git" />
									</div>

									<div className="grid grid-cols-1 gap-[17vh] w-[9vh] ">
										<Card icon={githubIcon} label="GitHub" />
									</div>

									<div className="grid grid-cols-1 gap-[17vh] w-[9vh] ">
										{/* maybe will add more here */}
									</div>
								</div>
							</div>
							{/* grid 5 */}
							<div className="flex items-center  ">
								<VerticalText text="HOSTING & DEPLOYMENT" />
								<div className="flex flex-col h-full gap-y-[3vh]  border-l pl-[5vh] pr-64">
									<div className="flex flex-col gap-y-8 ">
										<div className="grid grid-cols-1 gap-[17vh] w-[9vh]">
											<Card icon={netlifyIcon} label="Netlify" />
										</div>

										<div className="grid grid-cols-1 gap-[17vh]  w-[9vh]">
											<Card icon={renderIcon} label="Render" />
										</div>

										<div className="grid grid-cols-1 gap-[17vh] w-[9vh]">
											<Card icon={githubPagesIcon} label="GitHub Pages" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Card = ({ icon, label }) => {
	return (
		<div className="border-[.2vh] w-[14vh] h-[14vh] p-[1vh] rounded-[1.2vh] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ">
			<img
				src={icon}
				alt={`${label} icon`}
				className="text-5xl mb-[1vh] w-[7vh] h-[7vh] object-contain "
			/>
			<p className="text-[1.5vh] text-white">{label}</p>
		</div>
	);
};

const VerticalText = ({ text }) => {
	return (
		<div className="flex -rotate-90 max-w-[10vh] items-end justify-center ">
			<p className="text-white text-[3vh] text-nowrap font-bold">{text}</p>
		</div>
	);
};

export default Techstack;

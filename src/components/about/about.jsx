import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import resume from "../../assets/content/resume.pdf";
const about = () => {
	const buttonRef = useRef();

	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Nixsh_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<>
			<div className="w-full flex	flex-col items-center justify-center mt-24 backdrop-blur-xl text-black dark:text-white font-semibold dark:font-normal">
				<div className="max-w-[1200px]">
					<div className="flex flex-row gap-5 dark:text-white text-xl sm:text-2xl lg:text-4xl font-Kiwi items-center justify-center mt-16 transition-all duration-300">
						<AiOutlineMessage className="size-8 sm:size-10 lg:size-14 " />
						<div className="flex gap-2">
							A Bit
							<p className="text-gradient underline font-bold"> About Me</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row justify-around mt-10 gap-10 md:gap-20 mx-8 md:mx-20">
						<div className="flex flex-col md:w-9/12 gap-10">
							<div className="flex flex-col text-sm sm:text-lg lg:text-xl transition-all duration-300">
								<p>
									Hey, I'm Nishant, an engineering student of batch (2022-26)
									with a passion for Web Development, UI/UX designing, Video
									Editing.
								</p>
								<p>
									I'm skilled in C++,HTML, CSS, JavaScript, ReactJS and
									currently diving into rest of the MERN stack.
								</p>
							</div>
							<ul className="text-sm sm:text-lg lg:text-xl transition-all duration-300">
								What Im Upto right now :
								<li className="text-xs sm:text-sm lg:text-lg transition-all duration-300">
									- Currently i am working on multiple small projects to add to my profile.
								</li>
								<li className="text-xs sm:text-sm lg:text-lg transition-all duration-300">
									- Learning DSA on {" "}
									<a
										href="https://leetcode.com/u/callmenixsh/"
										className="underline text-teal-300"
									>
										leetcode
									</a>{" "}
									daily.
								</li>
								{/* <li className="sm:text-sm lg:text-lg">- I occasionally write <Link to="/blogs" className="underline text-teal-300">blogs</Link> about my journey</li> */}
							</ul>
						</div>
						<div className="flex flex-col min-[440px]:flex-row-reverse md:flex-col lg:justify-between justify-center items-center md:w-3/12 gap-10 md:gap-5">
							<button
								ref={buttonRef}
								onClick={downloadResume}
								className="pressablebtn resume-btn flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-3 lg:px-8 lg:py-4 rounded-xl text-white font-bold text-xs sm:text-sm lg:text-xl cursor-pointer text-center border-none bg-gradient-to-r from-[#25aae1] via-[#40e495] to-[#2bb673] bg-[length:500%_100%] hover:shadow-[0_4px_15px_rgba(49,196,190,0.75)] transition-all duration-300 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r select-none"
							>
								My Resume <FaDownload className="btn-icon" />
							</button>
							<div className="flex flex-col justify-start items-center">
								<p className="text-sm lg:text-lg mx-1">Want to connect?</p>
								<div className="grid grid-cols-4 md:grid-cols-3 mt-3 gap-4">
									<a
										href="https://mail.google.com/mail/?view=cm&fs=1&to=callmenixsh@gmail.com&su=Subject&body=Hi%20Nixsh!"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiMail className="size-7 sm:size-9 lg:size-12 dark:bg-black p-1.5 rounded-lg dark:invert hover:scale-110 duration-200" />
									</a>
									<a
										href="https://www.linkedin.com/in/callmenixsh/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin className="size-7 sm:size-9  lg:size-12 dark:bg-black p-1.5 rounded-lg dark:invert hover:scale-110 duration-200" />
									</a>
									<a
										href="https://github.com/callmenixsh"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaGithub className="size-7 sm:size-9  lg:size-12 dark:bg-black p-1.5 rounded-lg dark:invert hover:scale-110 duration-200" />
									</a>
									{/* <a
										href="https://instagram.com/callmenixsh"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaInstagram className="size-7 sm:size-9  lg:size-12 dark:bg-black p-1.5 rounded-lg dark:invert hover:scale-110 duration-200" />
									</a> */}
									<a
										href="https://x.com/callmenixsh"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaXTwitter className="size-7 sm:size-9  lg:size-12 dark:bg-black p-1.5 rounded-lg dark:invert hover:scale-110 duration-200" />
									</a>
									{/* <a href="#" className="invisible"></a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default about;

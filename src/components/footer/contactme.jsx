import React from "react";

const contactme = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<div className="text-gradient text-xl sm:text-3xl lg:text-4xl transition-all duration-300 font-bold">
					GET IN TOUCH
				</div>
				<div
    className="relative rounded-xl sm:rounded-3xl px-5 sm:px-10 py-5 my-4 lg:text-lg transition-all duration-300 bg-[radial-gradient(circle_at_center,#089EEE,#00FFD4)] bg-opacity-40"
    onMouseMove={(e) => {
		const { clientX, clientY } = e;
		e.currentTarget.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #089EEE, #00FFD4, #00FFB2, #A5FFD5, #089EEE)`;
		
    }}
>
					<div className="absolute inset-[2px] bg-[#110622] rounded-xl sm:rounded-3xl border-4 border-transparent  bg-clip-border"></div>
					<div className="relative z-10 ">
						<div className="font-Itim text-xs sm:text-sm lg:text-base mb-4 transition-all duration-300">
							To: callmenixsh@gmail.com
						</div>
						<div className="flex flex-row gap-3 lg:gap-6">
							<div className="flex flex-col items-left">
								<div className="font-bold text-sm lg:text-base transition-all duration-300">
									Your Name
								</div>
								<input
									type="text"
									placeholder="Your Name"
									className="bg-white rounded-md px-2 sm:px-4 py-0 sm:py-1 w-24 sm:w-40 lg:w-48 h-8 sm:h-10 lg:h-12 text-black text-xs sm:text-sm lg:text-lg text-left placeholder:text-center placeholder-gray-400 transition-all duration-300"
								/>
							</div>
							<div className="flex flex-col items-left">
								<div className="font-bold text-sm lg:text-base transition-all duration-300">
									Your Email
								</div>
								<input
									type="text"
									placeholder="example@gmail.com"
									className="bg-white rounded-md px-2 sm:px-4 py-1 sm:py-2 w-40 sm:w-56 lg:w-64 h-8 sm:h-10 lg:h-12 text-black text-xs sm:text-sm lg:text-lg text-left placeholder:text-center placeholder-gray-400 transition-all duration-300"
								/>
							</div>
						</div>
						<div className="flex flex-col items-left mt-4">
							<div className="font-bold">Your Message</div>
							<textarea
								placeholder="Your message goes here"
								className="bg-white rounded-md px-4 py-2 text-black sm:text-sm resize-y min-h-20 sm:min-h-24 lg:min-h-28 transition-[font-size] transition-[outline] text-xs lg:text-lg"
							/>
						</div>
						<button className="sendMessage pressablebtn rounded-md px-3 py-1.5 mt-2 text-white font-bold text-xs sm:text-sm lg:text-lg cursor-pointer text-center border-none bg-gradient-to-r from-[#089EEE] via-[#00FFD4] to-[#089EEE] bg-[length:500%_100%] hover:shadow-[0_4px_15px_rgba(49,196,190,0.75)] transition-all duration-300 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r select-none">
    Send
</button>

					</div>
				</div>
			</div>
		</>
	);
};

export default contactme;

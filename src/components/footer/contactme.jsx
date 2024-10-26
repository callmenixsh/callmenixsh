import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import the tick icon from react-icons

const ContactMe = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility
	const [errors, setErrors] = useState({ name: false, email: false, message: false }); // State for validation errors

	const isValidEmail = (email) => {
		// Simple regex for basic email format validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleSend = async (e) => {
		e.preventDefault(); // Prevent the default form submission

		// Reset error states
		setErrors({ name: false, email: false, message: false });

		let hasErrors = false; // Flag to check if there are any errors

		// Validate fields
		if (!name) {
			setErrors((prev) => ({ ...prev, name: true }));
			hasErrors = true;
		}
		if (!email || !isValidEmail(email)) {
			setErrors((prev) => ({ ...prev, email: true })); // Set error for invalid email format
			hasErrors = true;
		}
		if (!message) {
			setErrors((prev) => ({ ...prev, message: true }));
			hasErrors = true;
		}

		if (!hasErrors) {
			setIsSubmitting(true);
			const formData = {
				name,
				email,
				message,
				access_key: "7858d385-1d2b-49d6-92a9-4f6f6173a397", // Replace with your actual API key
			};

			try {
				const response = await fetch("https://api.web3forms.com/submit", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				// Debugging: Check response status
				if (!response.ok) {
					const errorData = await response.json();
					console.error("Error response:", errorData);
					throw new Error(errorData.message);
				}

				const data = await response.json();

				if (data.success) {
					setName("");
					setEmail("");
					setMessage("");
					setPopupVisible(true); // Show the popup on success
				} else {
					setPopupVisible(false); // Hide the popup on failure
				}
			} catch (error) {
				setPopupVisible(false); // Hide the popup on error
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	const handleClosePopup = () => {
		setPopupVisible(false);
	};

	const isFormValid = name && isValidEmail(email) && message; // Validate form fields

	return (
		<>
			<style>
				{`
					@keyframes gradientAnimation {
						0% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
						100% {
							background-position: 0% 50%;
						}
					}

					.animated-gradient {
						background: radial-gradient(circle at center, 
							#1E90FF,   /* Dodger Blue */
							#6A5ACD,   /* Slate Blue */
							#00CED1,   /* Dark Turquoise */
							#00BFFF,   /* Deep Sky Blue */
							#1E90FF);   /* Dodger Blue */
						background-size: 300% 300%;
						animation: gradientAnimation 5s ease infinite;
					}

					.popup {
						position: fixed;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						background: white;
						padding: 20px;
						border-radius: 10px;
						box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
						z-index: 1000;
					}

					.popup-overlay {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: rgba(0, 0, 0, 0.5);
						z-index: 999;
					}

					.error {
						color: red;
						margin-left: 5px;
					}
				`}
			</style>

			<div className="flex flex-col justify-center items-center">
				<div className="text-gradient text-xl sm:text-3xl lg:text-4xl transition-all duration-300 font-bold">
					GET IN TOUCH
				</div>
				<div className="relative rounded-xl sm:rounded-3xl px-5 sm:px-10 py-5 my-4 lg:text-lg transition-all duration-300 animated-gradient bg-opacity-40">
					<div className="absolute inset-[2px] bg-[#110622] rounded-xl sm:rounded-3xl border-4 border-transparent bg-clip-border"></div>
					<div className="relative z-10 ">
						<div className="font-Itim text-xs sm:text-sm lg:text-base mb-4 transition-all duration-300">
							To: callmenixsh@gmail.com
						</div>
						<div className="flex flex-row gap-3 lg:gap-6">
							<div className="flex flex-col items-left">
								<div className="font-bold text-sm lg:text-base transition-all duration-300">
									Your Name
									{errors.name && <span className="error">*</span>} {/* Red star for name */}
								</div>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Your Name"
									className="border bg-white/30 focus:bg-white focus:text-black text-white rounded-md px-2 sm:px-4 py-0 sm:py-1 w-24 sm:w-40 lg:w-48 h-8 sm:h-10 lg:h-12 text-black text-xs sm:text-sm lg:text-lg text-left placeholder:text-center placeholder-white focus:placeholder-gray-400 transition-all duration-300"
								/>
							</div>
							<div className="flex flex-col items-left">
								<div className="font-bold text-sm lg:text-base transition-all duration-300">
									Your Email
									{errors.email && <span className="error">*</span>} {/* Red star for email */}
								</div>
								<input
									type="text"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="example@gmail.com"
									className="border bg-white/30 focus:bg-white focus:text-black text-white rounded-md px-2 sm:px-4 py-1 sm:py-2 w-40 sm:w-56 lg:w-64 h-8 sm:h-10 lg:h-12 text-black text-xs sm:text-sm lg:text-lg text-left placeholder:text-center placeholder-white focus:placeholder-gray-400 transition-all duration-300"
								/>
							</div>
						</div>
						<div className="flex flex-col items-left mt-4">
							<div className="font-bold">
								Your Message
								{errors.message && <span className="error">*</span>} {/* Red star for message */}
							</div>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Your message goes here"
								className="border bg-white/30 focus:bg-white focus:text-black text-white rounded-md px-4 py-2 text-black sm:text-sm resize-y min-h-20 sm:min-h-24 lg:min-h-28 transition-[font-size] transition-[outline] text-xs lg:text-lg placeholder-white focus:placeholder-gray-400"
							/>
						</div>
						<button 
							className={`sendMessage pressablebtn rounded-md px-3 py-1.5 mt-2 text-white font-bold text-xs sm:text-sm lg:text-lg cursor-pointer text-center border-none bg-gradient-to-r from-[#089EEE] via-[#00FFD4] to-[#089EEE] bg-[length:500%_100%] hover:shadow-[0_4px_15px_rgba(49,196,190,0.75)] transition-all duration-300 ease-in-out hover:bg-[length:100%_100%] hover:bg-gradient-to-r select-none ${!isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
							onClick={handleSend}
							disabled={!isFormValid || isSubmitting} 
						>
							{isSubmitting ? "Sending..." : "Send"}
						</button>
					</div>
				</div>
			</div>

			{/* Popup for success message */}
			{popupVisible && (
				<div className="popup-overlay">
					<div className="popup flex items-center flex-col">
						<AiOutlineCheckCircle size={40} className="text-green-500 mx-auto " />
						<div className="text-black">Your message has been sent successfully!</div>
						<button onClick={handleClosePopup} className="mt-4 px-4 py-2 bg-blue-500 rounded-md">Close</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactMe;

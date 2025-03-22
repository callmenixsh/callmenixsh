import React from "react";
import CounterThumb from "../../assets/content/counter.png";
import RandomNumberThumb from "../../assets/content/random_number.png";
import NumberGuessThumb from "../../assets/content/number_guess.png";
import TemperatureConvertorThumb from "../../assets/content/temperature_convertor.png";
import DiceThumb from "../../assets/content/dice.png";
import TicTacToeThumb from "../../assets/content/tictactoe.png";
import ReminderThumb from "../../assets/content/restreminder.png";
import PassgenThumb from "../../assets/content/passwordgen.png";

// Array to store project data
const projects = [
	{
		name: "Counter",
		img: CounterThumb,
		url: "https://callmenixsh.github.io/Hajime/Counter/index.html",
	},
	{
		name: "Number Generator",
		img: RandomNumberThumb,
		url: "https://callmenixsh.github.io/Hajime/Random%20Number/index.html",
	},
	{
		name: "Guess the Number?",
		img: NumberGuessThumb,
		url: "https://callmenixsh.github.io/Hajime/Number%20Guess/index.html",
	},
	{
		name: "Temperature Convertor",
		img: TemperatureConvertorThumb,
		url: "https://callmenixsh.github.io/Hajime/Temperature%20Convertor/index.html",
	},
	{
		name: "Dice Roller",
		img: DiceThumb,
		url: "https://callmenixsh.github.io/Hajime/Dice/index.html",
	},
	{
		name: "Tic Tac Toe",
		img: TicTacToeThumb,
		url: "https://callmenixsh.github.io/Hajime/Tic%20Tac%20Toe/index.html",
	},
	{
		name: "Password Generator",
		img: PassgenThumb,
		url: "https://callmenixsh.github.io/Hajime/Password/index.html",
	},
	{
		name: "Rest Reminder",
		img: ReminderThumb,
		url: "https://callmenixsh.github.io/Hajime/Reminder/index.html",
	},
];

const MiniProject = () => {
	return (
		<div className="flex flex-col justify-center items-center my-28">
			<h1 className="text-3xl underline pb-14 text-black dark:text-white ">
				Mini Projects
			</h1>

			{/* Responsive Grid with Wrapping */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mx-10 ">
				{projects.map((project, index) => (
					<a
						key={index}
						className="bg-black/10 dark:bg-white/10 group flex items-center justify-center flex-col p-1 border-2 border-black dark:border-white rounded-lg hover:scale-105 hover:rotate-2 transition-all overflow-hidden"
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className=" w-44 h-28 overflow-hidden rounded-md">
							<img
								className="w-full h-full object-cover"
								src={project.img}
								alt={project.name}
							/>
						</div>
						<div className="group-hover:text-gradient text-black dark:text-white transition-all duration-300 text-sm mt-2 text-center">
							{project.name}
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default MiniProject;

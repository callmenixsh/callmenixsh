// Myworks.js
import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Worknav from "../../components/navbar/worknav";
import Experiences from "../../components/expwork/experiences";
import MajorProject from "../../components/expwork/majorProject";
import MiniProject from "../../components/expwork/miniProject";

const Myworks = () => {
	const [activeComponent, setActiveComponent] = useState("Experiences");

	return (
		<>
			<Sidebar />
			<Worknav setActiveComponent={setActiveComponent} /> 

			<div className="mt-16"> {/* Offset for fixed navbar */}
				{/* Conditionally render based on the activeComponent state */}
				{activeComponent === "Experiences" && <Experiences />}
				{activeComponent === "MajorProject" && <MajorProject />}
				{activeComponent === "MiniProject" && <MiniProject />}
			</div>
			
			<Footer />
		</>
	);
};

export default Myworks;

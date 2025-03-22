import React from "react";

import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Homenav from "../../components/navbar/homenav";
import Herosection from "../../components/herosection/herosection";
import About from "../../components/about/about";
import Education from "../../components/about/education";
import Techstack from "../../components/techstack/techstack";
import Topprojects from "../../components/topprojects/topprojects";
import Certifications from "../../components/certificates/certifications";

const home = () => {
	return (
		<>
			<Sidebar />
			<Homenav />
			<div id="home">
				<Herosection />
			</div>
			<div id="about">
				<About />
				<Education />
			</div>
			<div id="skills">
				<Techstack />
				<Topprojects />
				<Certifications />
			</div>
			<div id="contact">
				<Footer />
			</div>
		</>
	);
};

export default home;

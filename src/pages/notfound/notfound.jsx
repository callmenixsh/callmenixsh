import React from "react";

import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Homenav from "../../components/navbar/homenav";
import Nopage from "../../components/nopage/nopage";


const notfound = () => {
	return (
		<>
			<Sidebar />
            <Nopage/>
			<Footer />
		</>
	);
};

export default notfound;

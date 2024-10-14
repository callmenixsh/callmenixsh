import React from 'react'


import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Worknav from '../../components/navbar/worknav';
import Experiences from '../../components/expwork/experiences';
import MajorProject from '../../components/expwork/majorProject';
import MiniProject from '../../components/expwork/miniProject';



const experience = () => {
  return (
    <>
        <Sidebar/>
        <Worknav/>
        <Experiences/>
        <Footer/>
    </>
  )
}

export default experience
import React from 'react'



import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Worknav from '../../components/navbar/worknav';
import MiniProject from '../../components/expwork/miniProject';

const minis = () => {
  return (
    <>
        <Sidebar/>
        <Worknav/>
        <MiniProject/>
        <Footer/>
    </>
  )
}

export default minis
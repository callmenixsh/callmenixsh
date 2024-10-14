import React from 'react'

import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Worknav from '../../components/navbar/worknav';
import MajorProject from '../../components/expwork/majorProject';

const projects = () => {
  return (
    <>
        <Sidebar/>
        <Worknav/>
        <MajorProject/>
        <Footer/>
    </>
  )
}

export default projects
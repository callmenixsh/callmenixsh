import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

function Layout({ children }) {
    return (
        <>
            {/* Navbar  */}
            <Navbar />

            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </>
    )
}

export default Layout
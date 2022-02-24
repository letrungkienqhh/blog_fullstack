import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'


const Layout = ({children}) => {
    return (
        <>  
        <Head>
            <title>Chaof mung den voi website</title>
            
        </Head>
        <Header/>
        {children}
        <Footer/>   
        </>
    )
}

export default Layout
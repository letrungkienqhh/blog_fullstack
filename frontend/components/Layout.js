import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const styles={
    wrapper:'max-h-screen'
}
const Layout = ({children}) => {
    return (
        <>  
        <Head>
            <title>Chaof mung den voi website</title>
            
        </Head>
        <Header/>
        <div className={styles.wrapper}>
                {children}
        </div>
        <Footer/>   
        </>
    )
}

export default Layout
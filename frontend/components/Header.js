import Image from 'next/image'
import React,{useState} from 'react'
import Link from 'next/link'


const styles={
    wrapper:"flex bg-blue-200 justify-between",
    logo:"flex",
    appName:"text-xl text-red-500",
    logoContainer: "flex items-center",
    navBarContainer:"flex m-2",
    navBarItem:'flex items-center font-semifold text-blue-500 mx-2',
    selectedNavBarItem: "bg-[#20242A] rounded-2xl   ",
    button:"bg-blue-500 rounded-xl items-center p-2 m-2 hover:cursor-pointer",
    buttonContainer:"justify-center items-center flex",

}
const APP_NAME="KANTAN"

const Header = () => {
    const [selectedNavBar,setSelectedNavBar]=useState('trangchu')

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}> 
                <div className={styles.logo}>
                    <Image src={'/favicon.ico'} alt="logo" width={70} height={70}  />
                </div>
                <div className={styles.appName}>
                    <Link href="/">
                        {APP_NAME}
                    </Link>
                </div>
                
            </div>
            <div className={styles.navBarContainer}>
                <div 
                    onClick={() =>setSelectedNavBar('trangchu')}
                    className={`${styles.navBarItem} ${selectedNavBar=='trangchu' && styles.selectedNavBarItem}` } >
                    <Link href="/">
                       Trang chu
                    </Link>
                </div>
                <div
                    onClick={() =>setSelectedNavBar('baiviet')}  
                    className={`${styles.navBarItem} ${selectedNavBar=='baiviet' && styles.selectedNavBarItem}` } >
                    <Link href="./baiviet">
                        <a>Bai Viet</a>
                    </Link>
                </div>
                <div
                     onClick={() =>setSelectedNavBar('hoctiengnhat')}
                     className={`${styles.navBarItem} ${selectedNavBar=='hoctiengnhat' && styles.selectedNavBarItem}` } >
                    <Link href="./hoctiengnhat">
                        <a>Hoc Tieng Nhat</a>
                    </Link>
                </div>
                
                <div  className={`${styles.navBarItem} ${selectedNavBar=='khampha' && styles.selectedNavBarItem}` } onClick={() =>setSelectedNavBar('khampha')}>
                    <Link href="./khampha">
                        <a>Kham pha nhat ban</a>
                    </Link>
                </div>

                <div className={`${styles.navBarItem} ${selectedNavBar=='kinhnghiem' && styles.selectedNavBarItem}` } onClick={() =>setSelectedNavBar('kinhnghiem')}>
                    <Link href="./kinhnghiem">
                        <a>Kinh nghiem</a>
                    </Link>
                </div>
                <div  className={`${styles.navBarItem} ${selectedNavBar=='gocchiase' && styles.selectedNavBarItem}` } onClick={() =>setSelectedNavBar('gocchiase')}>
                    <Link href="./gocchiase">
                        <a>Goc chia se</a>
                    </Link>
                </div>
            

            </div>

            <div  className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <Link href="./signup" >
                            <a>Sign Up</a>
                        </Link>
                    </div>
                  
                    <div className={styles.button}>
                        <Link href="./signin" >
                            <a>Sign in</a>
                        </Link>
                    </div>
                   
            </div>
        
        </div>
    )
}

export default Header
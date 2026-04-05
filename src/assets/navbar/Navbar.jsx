import React, { useEffect, useState } from 'react'
import './navbar.css'
import { RiMenuLine,  RiMenuUnfold4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [clickMenu, setClickMenu] = useState(false)
    const [dropMenu, setDropMenu] = useState(false)
    

    useEffect(()=>{
        const handleScroll = () =>{
            const curentScroll = window.pageYOffset;

            if (curentScroll <= 0){
                setShowNavbar(true);
                 lastScroll.current = 0;
                return
            }

            if(curentScroll > lastScroll && curentScroll >50){
                setShowNavbar(false)
            }else {
                setShowNavbar(true)
            }

            setLastScroll(curentScroll)
        }
         window.addEventListener("scroll", handleScroll);
         
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[lastScroll]);


  return (
    <>
    <div className={`nav ${showNavbar ? "show" : "hide"}`} >
        <div className='navName'><Link to="/" >RAYZMEDIA</Link></div>
        <div className='navMenu' onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>{(!clickMenu)?<RiMenuLine /> :<RiMenuUnfold4Line/> } </div>
        
    
        <ul className={`navLi ${(dropMenu)? " navLiM" : ""}`} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
            <li><Link to="/ourPlan" >Plan</Link></li>
            {/* <li><Link to="/about" >About Us</Link></li> */}
            <li><Link to="/contact" >Contact Us</Link></li>
        </ul>
    </div>



    </>
  )
}

export default Navbar
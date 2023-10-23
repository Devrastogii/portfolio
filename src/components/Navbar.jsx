import React, { useEffect, useState } from 'react'
import { HashLink as Link } from "react-router-hash-link";
import logo from '../images/logo.png'
import '../index.css'

const Navbar = () => {

  const [ scroll, controlScroll ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollLength = window.scrollY;
        if(scrollLength > 45) {
            controlScroll(true);
        }
        else {
            controlScroll(false);
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <>       
            <div className={`fixed flex items-center w-full h-24 -top-2 z-40 ${scroll ? "bg-[#1E1E1E] shadow-2xl" : "bg-transparent"}`}>
                <div className='flex mt-3 px-12 items-center w-full'>
                <div className='justify-start w-1/2'>
                    <img src={logo} className='w-10 h-10' />
                </div>
                    <div className='flex justify-end w-1/2 text-[17px] text-[#C8C8C8] font-medium nav_styling'>
                        <div><Link to={'#home'} smooth className='hover:text-white'>Home</Link></div>                        
                        <div className='pl-7'><Link to={'#about'} smooth className='hover:text-white'>About</Link></div>                        
                        <div className='pl-7'><Link to={'#experience'} smooth className='hover:text-white'>Experience</Link></div>                        
                        <div className='pl-7'><Link to={'#contact'} smooth className='hover:text-white'>Contact</Link></div> 
                        <div className='pl-7 -mt-1'>
                            <a href='https://drive.google.com/file/d/1j0WsHxmYTZ6TItMYzchXz0SX2rwM41Rs/view?usp=sharing' target='_blank' className='w-[190px] h-[40px] border-[3px] flex justify-center items-center border-[#00D1FF] font-medium text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white tracking-widest transition ease-in btn_styling'>RESUME</a>
                        </div>                                                                       
                    </div>

                    <div className='text-white flex text-lg mobile-nav-btn'>
                        <i name="menu" class="bi bi-list mobile-nav-icon"></i>
                        <i name="close" class="bi bi-x-lg mobile-nav-icon"></i>
                    </div>
                </div>
            </div>     
    </>
  )
}

export default Navbar

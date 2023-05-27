import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { HashLink as Link } from "react-router-hash-link";
import Typed from 'typed.js';
import { useRef } from 'react';
import Particle from "./Particles/Particle";
import '../index.css';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['<i>Full Stack Developer.</i>', '<i>UI/UX Designer.</i>'],
      typeSpeed: 60,
      loop: true,
      showCursor: true
    });

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <>
        <section id='home' className='home_styling'>
            <Navbar />
            
            <div className='mt-[120px] ml-[50px]'>
            <div className="-z-10 absolute">
      <Particle />
    </div>           
                <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.2}} className='text-[#898989] text-[40px]'>Hi, I am</motion.div>
                <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.5}} className='text-white text-[75px]'>Dev Rastogi.</motion.div>
                <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.8}} className='text-[#C8C8C8] text-[47px] ml-2 typed_styling'>I am a <span ref={typedRef} className='text-[#00FFFF]'></span></motion.div>
                <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: 0, opacity: 0}} transition={{duration: 2}} className='text-[#C8C8C8] text-[20px] mt-6 ml-3 sm:pr-32 lg:pr-40 text-justify'>I specialize in creating digital experiences that are visually stunning and user-friendly. With a passion for finding creative solutions to problems, I have several years of experience in the industry, working on a range of projects. I enjoy collaborating with teams and delivering successful projects that meet the needs of both users and stakeholders.</motion.div>
            </div>
            
            <div className='flex w-full justify-center mt-7'><Link to={'#about'} smooth><i class="bi bi-mouse-fill text-[35px] text-white"></i></Link></div>

            {/* <div className='flex w-full justify-end pr-12 -mt-10'><i class="bi bi-info-circle-fill text-[22px] text-white"></i></div> */}

        </section>
    </>
  )
}

export default Home

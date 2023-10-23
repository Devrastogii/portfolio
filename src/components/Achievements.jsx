import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ff from '../images/ff.png'
import i from '../images/i.jpg'
import infusion from '../images/infusion.jpg'
import '../index.css';

const Achievements = () => {

  const [ show, setShow ] = useState(false);
  const [ index, setIndex ] = useState(0);

  function toggle(id) {
      setShow(true);
      setIndex(id);
  }

  function toggleEnd(){
    setShow(false);
  }

  return (
    <>
          <section id='achievements' className='achieve_styling'>
            <div className='pl-12 text-white'>
                <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}} className='lg:mt-96 text-[32px] font-medium '>Hackathons</motion.div>
                <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}}><hr className='mt-1 border-2 border-[#00D1FF] w-56' /></motion.div>
            </div>

            <div className='flex justify-evenly -ml-1 w-full mt-20 achieve_card_styling'>
            <motion.div id='3' onHoverStart={() => toggle(3)} onHoverEnd={() => toggleEnd()} initial={{translateX: -50}} whileInView={{translateX: 0}} transition={{duration: 1, delay: 0.3}} className='flex cursor-pointer flex-col border-8 border-[#00D1FF] w-[330px] h-[280px] blue_border_styling'>
                <motion.img initial={{translateX: -50}} whileInView={{translateX: 0}} transition={{duration: 1, delay: 0.3}} src={infusion} className='w-[350px] h-[265px] absolute z-0 img_card_styling' /> 
                    {show && (
                    <>
                      {index === 3 ? (
                        <>
                        <motion.div className='w-[350px] h-[265px] opacity-70 bg-black z-5 black_styling'></motion.div>
                        <motion.div className='w-[360px] h-28 text-white font-bold tracking-wide text-xl mt-[160px] pl-4 transition-all duration-300 uppercase flex italic items-center absolute z-10' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.2}}>Bajaj Hackrx 4.0</motion.div>
                        <motion.div initial={{opacity: 0, translateX: -30}} animate={{opacity: 1, translateX: 0}} transition={{duration: 1.5}}><hr className='-mt-8 ml-4 absolute z-10 border-2 border-[#00D1FF] w-52' /></motion.div>
                        </>
                      ) : null} </> )}                 
                </motion.div>
                
                <motion.div id='1' onHoverStart={() => toggle(1)} onHoverEnd={() => toggleEnd()}  initial={{translateX: -50}} whileInView={{translateX: 0}} transition={{duration: 1, delay: 0.1}} className='flex cursor-pointer flex-col border-8 border-[#00D1FF] w-[330px] h-[280px] blue_border_styling'>
                    <motion.img initial={{translateX: -50}} whileInView={{translateX: 0}} transition={{duration: 1, delay: 0.1}} src={ff} className='w-[350px] h-[265px] absolute z-0 img_card_styling' />                
                     {show && (
                    <>
                      {index === 1 ? (
                        <>
                        <motion.div className='w-[350px] h-[265px] opacity-70 bg-black z-5 black_styling'></motion.div>
                        <motion.div className='w-[360px] h-28 text-white font-bold tracking-wide text-2xl mt-[160px] pl-4 transition-all duration-300 uppercase flex italic items-center absolute z-10' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.2}}>Frontend Fiesta</motion.div>
                        <motion.div initial={{opacity: 0, translateX: -30}} animate={{opacity: 1, translateX: 0}} transition={{duration: 1.5}}><hr className='-mt-8 ml-4 absolute z-10 border-2 border-[#00D1FF] w-44' /></motion.div>
                        </>
                      ) : null} </> )}
                </motion.div>

                <motion.div id='2' onHoverStart={() => toggle(2)} onHoverEnd={() => toggleEnd()} initial={{translateX: -50}} whileInView={{translateX: 0}} transition={{duration: 1, delay: 0.2}} className='flex cursor-pointer flex-col border-8 border-[#00D1FF] w-[330px] h-[280px] blue_border_styling'>
                <motion.img initial={{translateX: -50}} whileInView={{translateX: 0}} transition={{duration: 1, delay: 0.2}} src={i} className='w-[350px] h-[265px] absolute z-0 img_card_styling' /> 
                    {show && (
                    <>
                      {index === 2 ? (
                        <>
                        <motion.div className='w-[350px] h-[265px] opacity-70 bg-black z-5 black_styling'></motion.div>
                        <motion.div className='w-[360px] h-28 text-white font-bold tracking-wide text-2xl mt-[160px] pl-4 transition-all duration-300 uppercase flex italic items-center absolute z-10' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.2}}>Inspirathon 2.0</motion.div>
                        <motion.div initial={{opacity: 0, translateX: -30}} animate={{opacity: 1, translateX: 0}} transition={{duration: 1.5}}><hr className='-mt-8 ml-4 absolute z-10 border-2 border-[#00D1FF] w-44' /></motion.div>
                        </>
                      ) : null} </> )}                    
                </motion.div>
                
            </div>  
            </section>
    </>
  )
}

export default Achievements

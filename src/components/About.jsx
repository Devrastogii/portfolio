import React from 'react'
import dev from '../images/dev.png'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import '../index.css';

const About = () => {

  return (
    <>
        <section id='about' className='about_styling'>
            <div className='pl-12 text-white'>
                <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}} className='text-[32px] font-medium'>About Me</motion.div>
                <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}}><hr className='mt-1 border-2 border-[#00D1FF] w-56' /></motion.div>
                <div className='flex justify-evenly lg:w-11/12 gap-16'>
                   <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}} className='mt-10 text-[15px] leading-8 text-justify w-2/3 md:pr-5 xl:w-3/4'>I am a Full Stack Web Developer and Graphic Designer with a strong background in web development and proficiency in HTML, CSS, JavaScript, and frameworks like React.js, Next.js, Node.js, Express.js, and Mongoose. I have experience working on multiple projects, and have also worked as a freelance graphic designer using Adobe Photoshop, Illustrator, Figma, and Canva. Additionally, I have honed my problem-solving skills and algorithmic thinking by participating in Competitive Programming and solving a good number of LeetCode questions.

                   I am passionate about technology and design and constantly seeking out new challenges and opportunities for growth. With my dedication and results-driven mindset, I am always looking for opportunities to apply my skills and experience to real-world problems and make a positive impact.</motion.div>

                <div className='w-1/2 flex justify-center items-center rounded-xl lg:h-[450px] z-20'>
                <Tilt>
                  <motion.img src={dev} whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}} alt="my-picture" className='h-60 w-60 rounded-full shadow-2xl shadow-blue-400 cursor-pointer img_styling' /> 
                  </Tilt>
                </div>
                </div>
                               
            </div>
        </section>
    </>
  )
}

export default About

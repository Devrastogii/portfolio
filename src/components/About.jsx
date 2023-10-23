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
                   <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.5}} className='mt-10 text-[15px] leading-8 text-justify w-2/3 md:pr-5 xl:w-3/4'>I'm a professional with a passion for web development and machine learning. With a solid foundation in HTML, CSS, and JavaScript, I've delivered numerous web projects that combine functionality and aesthetics. My experience extends to frameworks like React.js, Next.js, Node.js, Express.js, Flask, and Mongoose, enabling me to create dynamic and responsive web applications.

My journey also ventures into the exciting realm of machine learning. I'm dedicated to exploring the intricacies of this field, with hands-on experience in Python and data science libraries. Whether it's developing web solutions or diving into machine learning models, I'm driven by a commitment to innovation and problem-solving.

I'm excited about the potential at the intersection of web development and machine learning, and I'm eager to contribute innovative solutions to real-world challenges. As a lifelong learner, I thrive on new challenges and opportunities for growth. With a dedication to results and a forward-thinking mindset, I'm always seeking ways to apply my skills and experience to make a positive impact.</motion.div>

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

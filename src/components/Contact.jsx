import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../index.css';

const Contact = () => {

  const [year, setYear] = useState("");

  useEffect(() => {
    const d = new Date().getFullYear();
    setYear(d);
  }, [])

  return (
    <>
        <section id='contact' className='contact_styling'>
            <div className='w-full flex justify-center text-white items-center flex-col'>
            <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.2}} className='lg:mt-16 text-[32px] font-medium'>Get In Touch</motion.div>
                <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.2}}><hr className='border-2 border-[#00D1FF] w-56' /></motion.div>
                <motion.div whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.2}} className='mt-10 text-center font-medium text-[18px] contact_text'>I am actively looking for any new opportunities, and my inbox is always open.
     Whether you have any idea <br /> or just want to say Hi, you can message me.</motion.div>

        <div className='mt-2 flex justify-center w-full'>
        <motion.a whileInView={{translateX: 0, opacity: 1}} initial={{translateX: -50, opacity: 0}} transition={{duration: 1.2}} href="mailto:devrastogii280@gmail.com" className='w-[190px] h-[40px] border-[3px] flex justify-center items-center border-[#00D1FF] font-medium text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white tracking-wide transition ease-in mt-8'>Say Hello</motion.a>    
        </div>  

        <div className='mt-20 h-20 flex flex-col justify-center items-center w-full'>
            <p className='text-[#707070] font-bold text-[18px]'>Designed by Dev Rastogi {year}</p>
            <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.2}} className='flex gap-3 mt-1'>
                <a href="https://github.com/Devrastogii" target='_blank' rel='noreferrer'><i class="bi bi-github text-[#00D1FF] hover:text-[#34bcdb] text-[15px]"></i></a>
                <a href="https://www.linkedin.com/in/dev-rastogi-260334234" target='_blank' rel='noreferrer'><i class="bi bi-linkedin hover:text-[#34bcdb] text-[#00D1FF] text-[15px]"></i></a>
                <a href="https://leetcode.com/devrastogii280" target='_blank' rel='noreferrer' className='mt-1'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="15" width="15"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" id="mainIconPathAttribute" fill="#00D1FF"></path></svg></a>
            </motion.div>
        </div>     
            </div>
        </section>
    </>
  )
}

export default Contact

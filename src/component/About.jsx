import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0,x:200}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center  container p-14 mx-auto md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1
      under font-light'>Me</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 '> A Developer passionate about crafting innovative designs and turning ideas into reality.
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src="https://res.cloudinary.com/cloudpip/image/upload/v1742887678/vgzq6ylzig24k6onwaxh.png" alt="" className='w-full sm:w-1/2 max-w-lg ' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-500'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 '>

            <div>
              <p className='text-4xl font-medium text-gray-600'>1+</p>
              <p>Year of Experience</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-600'>20+</p>
              <p>Project Complete</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-600'>10+</p>
              <p>Happy Client </p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-600'>5+</p>
              <p>Project Ongoing</p>
            </div>


          </div>
          <p className='my-10 max-w-lg'> I am Rashid Khalique, a MERN Stack Developer with 7 months of experience as a Frontend Developer at Icreativez Technology. My expertise in Node.js and React has been demonstrated through projects like a Google Form clone, an Email AI Parser, an HR Payroll backend with an admin panel, and my ongoing work on a Goods Service website. I am passionate about building dynamic and responsive applications and am eager to bring my skills to your team.</p>
          <button className='bg-blue-500 text-white px-8 py-2 rounded sm:left-0'>Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About

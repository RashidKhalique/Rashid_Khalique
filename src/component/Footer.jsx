import React from 'react'
import assets from '../assets/assets'

const footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:md-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
                    <img src="https://eccomerce-front-blush.vercel.app/Logo's/white-bg-logo.png" alt="" width="40"/>
                    <p className='text-gray-300 mt-4'> I can help you to build your dream website. and also help help you to reach on top  </p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-lg font-bold mb-4 text-white'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About us</a>
                        <a href="#Contact" className='hover:text-white'>Contact us</a>
                        <a href="#Privacy" className='hover:text-white'>Privacy-Placy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                <h3 className='text-lg font-bold mb-4 text-white'>Subscribe For News Letter</h3>
                <p className='text-gray-400 mb-4 max-w-80 '>Latest News, article and resources sent to your inbox weekly</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe Now</button>
                </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright © 2025 Rashid Khalique. All Rights Reserved By Client's. . 
            </div>
        </div>
    )
}

export default footer

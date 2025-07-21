import { motion } from 'framer-motion'
import React, { useState } from 'react'



const Contact = () => {
  
 const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const phoneNumber = '923043121764'; // ✅ Replace with your WhatsApp number (no +)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { Name, Email, Message } = formData;
    const text = `Hello! My Name: ${Name} Email: ${Email}  Message: ${Message} . I'm Reached you From Your Website`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURI(text)}`;

    window.open(url, '_blank'); // Open WhatsApp in a new tab
  };
  return (
    <motion.div 
    initial={{opacity:0,x:-200}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Contact
        <span className='underline underline-offset-4 under text-center font-light decoration-0'> With us</span></h1>
      <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>Ready to make a move ? Let's Build Future Together</p>

      <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={sendToWhatsApp}>
        <div className='flex flex-wrap '>
          <div className='w-full md:w-1/2 text-left'>
            Name
            <input type="text" className='w-full border border-gray-400 rounded py-3 px-4 mt-2 ' placeholder='Enter your name ' name='Name' value={formData.Name} onChange={handleChange} required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Email
            <input type="email" className='w-full border border-gray-400 rounded py-3 px-4 mt-2 ' placeholder='Enter your Email ' name='Email'  value={formData.Email}
              onChange={handleChange}    required />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea name="Message" placeholder='Enter Message Here' className=' w-full border border-gray-400 rounded py-3 px-4 mt-2 h-48 resize-none'  value={formData.Message}
            onChange={handleChange}  required ></textarea>
        </div>
        <button type='submit' className="bg-blue-600 text-white py-2 px-12 mb-10 rounded" >Send Now</button>
      </form>

    </motion.div>
  )
}

export default Contact

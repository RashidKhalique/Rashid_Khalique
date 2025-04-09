import { useState } from 'react'
import Header from '../component/Header.jsx';
// import Header from './component/Header.jsx'
import About from './component/About.jsx'
import Project from './component/Project.jsx'
import Testimonials from './component/Testimonials.jsx'
import Contact from './component/Contact.jsx'
import Footer from './component/Footer.jsx'
function App() {

  return (
    <>
    <div className='w-full overflow-hidden'>
    <Header/>
    <About/>
    <Project/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App

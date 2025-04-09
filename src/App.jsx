import { useState } from 'react'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'
import Footer from './component/Footer'
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

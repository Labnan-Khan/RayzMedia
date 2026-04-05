import React from 'react'
import Navbar from './assets/navbar/Navbar'
import Home from './assets/home/Home'
import Footera from './assets/footer/Footera'
import Projects from './assets/projects/Projects'
import OurPlan from './assets/ourPlan/OurPlan'
import About from './assets/about/About'
import Contact from './assets/contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './assets/scrollToTop/ScrollToTop'

function App() {
  return (
    <>
   
    
    <BrowserRouter>

      <ScrollToTop />
      < Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/ourPlan' element={<OurPlan />}/>
        {/* <Route path='/about' element={<About />}/> */}
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      <Footera />
    </BrowserRouter>

   
     </>
  
  )
}

export default App
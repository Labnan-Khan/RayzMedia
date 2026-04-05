import React from 'react'
import './followUs.css'
import { PiXLogo } from 'react-icons/pi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { TfiLinkedin, TfiPinterest } from 'react-icons/tfi'
function FollowUs() {
  return (
    <>
    
    
        <div className='follUs'>
          <h4 className='follUsH4'> Stay Connected with RayzMedia</h4>
          <p className='follUsP1'>A closer look at the edits, ideas, and
            creative process behind content that performs.
          </p>
          <div className='follUsLogo'>
            <div className='logoSec' >
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log1'><PiXLogo /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log3'><ImYoutube /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log4'><FaFacebookF /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log2'><BiLogoTiktok /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log5'><TfiPinterest /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log6'><FaInstagram /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log4'><TfiLinkedin /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"> <div className='log7'><BiLogoGmail /></div></a>       

            
            </div>
          </div>
        </div>
    
    

    </>
  )
}

export default FollowUs
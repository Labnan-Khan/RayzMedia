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
              <a href="https://x.com/rayzmedia_?s=21"  target="_blank" rel="noopener noreferrer"><div className='log1'><PiXLogo /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log3'><ImYoutube /></div></a>
              <a href="https://www.facebook.com/share/17Wy7ta5eU/?mibextid=wwXIfr"  target="_blank" rel="noopener noreferrer"><div className='log4'><FaFacebookF /></div></a>
              <a href="https://www.tiktok.com/@rayzmedia.com?_r=1&_t=ZS-95UE7wuPuOg"  target="_blank" rel="noopener noreferrer"><div className='log2'><BiLogoTiktok /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log5'><TfiPinterest /></div></a>
              <a href="https://www.instagram.com/rayzmedia?igsh=ODdkNXR1czV2dWox"  target="_blank" rel="noopener noreferrer"><div className='log6'><FaInstagram /></div></a>
              <a href="https://www.linkedin.com/company/rayzmedia/?viewAsMember=true"  target="_blank" rel="noopener noreferrer"><div className='log4'><TfiLinkedin /></div></a>
              <a href="mailto:Admin@rayzmedia.com?subject=Hello&body=I want to contact you"  target="_blank" rel="noopener noreferrer"> <div className='log7'><BiLogoGmail /></div></a>       

            
            </div>
          </div>
        </div>
    
    

    </>
  )
}

export default FollowUs
import React from 'react'
import './footer.css'
import { PiXLogo } from 'react-icons/pi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { TfiLinkedin, TfiPinterest } from 'react-icons/tfi'
function Footera() {
  return (
    <>
    
      <div className='footera'>

        <div className='footeraUpside'>
          <h4 className='footerH4'>RAYZMEDIA</h4>
          <p className='footerP1'>Stay inspired with weekly
             viral edits, motion tutorials, 
            and behind-the-scenes design breakdowns.
          </p>

          <div className='footerLogo'>
            <div className='logoSec' >
              

              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><PiXLogo /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><ImYoutube /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><FaFacebookF /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><BiLogoTiktok /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><TfiPinterest /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><FaInstagram /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><TfiLinkedin  /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"> <div className='log'><BiLogoGmail /></div></a>       



            </div>
            
          </div>
        </div>

          <div className='footerDown'>
            <div className='downSection'>
            <p>All Rights Reserved</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Refund Policy</p>
            <p>Rights and License Agreement</p>
          </div>
          </div>
        </div>
    
    
    
    </>
  )
}

export default Footera
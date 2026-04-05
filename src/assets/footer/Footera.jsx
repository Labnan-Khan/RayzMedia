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
          <div className='footeraUpsideLeft'>
            <h4 className='footerH4'>RAYZMEDIA</h4>
            <p className='footerP1'>Creative Support • Dedicated Editors • Reliable Delivery</p>
          </div>
          <div className='footerLogo'>
            <div className='logoSec' >
              

              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><BiLogoTiktok /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><FaInstagram /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"><div className='log'><TfiLinkedin  /></div></a>
              <a href="https://www.youtube.com/watch?v=9q56uSoWoDk"  target="_blank" rel="noopener noreferrer"> <div className='log'><BiLogoGmail /></div></a>       



            </div>
            
          </div>
        </div>

          <div className='footerDown'>
            <div className='downSection'>
            <p>© 2026 Rayzmedia All Rights Reserved</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms</p>
              <p>Refund Policy</p>
            </div>
          </div>
          </div>
        </div>
    
    
    
    </>
  )
}

export default Footera
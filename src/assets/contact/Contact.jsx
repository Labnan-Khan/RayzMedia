import React, { useRef } from 'react'
import './contact.css'
import FollowUs from '../FollowUs/FollowUs'
import { PiHandWavingDuotone } from 'react-icons/pi'
import { FaHandPointLeft, FaHandshake } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

function Contact() {

const form = useRef()

const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm("service_hhc0j9n", "template_79utwuf" , form.current, {
        publicKey: "VUw7twkZAl6-LpT5M",
    }).then(
        form.current.reset()
    ),
    (error)=>{
        console.log("failed")
    }
}


  return (
    <>
    <div className='ContactUs'>

        <div className='contactHome'>
            <div className='contactHomeleft'>
                <h2>We’re Here to Help </h2>
                <p>
                    Have a question, need support, or facing
                     any issue with a download or subscription?
                </p>
                <p>
                    Don’t worry – our team is always 
                    available to help
                     you and make sure everything works smoothly.
                </p>
            </div>
            
            <div className='contactHomeRight'>
                <form className='formSec' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Name'/>
                <input type="email" name="user_email" placeholder='Email' />
                <textarea type="text" name='message' placeholder='Message' cols="7"></textarea >
                <button type='submit'>Send Message</button>
                </form>
                {/* <p>ok</p> */}
            </div>
        </div>

        <div className='waysToReachUs'>
            <h4>Other Ways to Reach Us</h4>
            <p>If you prefer email, you can contact us directly:</p>

            <div className='waysToReachUsBoxes'>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Technical Support</h5>
                        <p>support@earnedits.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Technical Support</h5>
                        <p>support@earnedits.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Technical Support</h5>
                        <p>support@earnedits.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>
                
                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Technical Support</h5>
                        <p>support@earnedits.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

            </div>
        </div>

        <FollowUs />
    </div>


    </>
  )
}

export default Contact
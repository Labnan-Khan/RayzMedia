import React, { useRef } from 'react'
import './contact.css'
import FollowUs from '../FollowUs/FollowUs'
import { PiHandWavingDuotone } from 'react-icons/pi'
import { FaHandPointLeft, FaHandshake } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { IoMdCheckmark } from 'react-icons/io'

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
                <div className='leftimg'></div>
                <div className='leftBottom'>
                    <div className='firestRow'>
                        <p>Book a 1:1</p>
                        <p>consultaion to:</p>
                        <div></div>
                    </div>
                    <div className='secondRow'>
                        <div>
                            <span><IoMdCheckmark /></span>
                            <p>See how we'll solve your editing needs</p>
                        </div>

                        <div>
                            <span><IoMdCheckmark /></span>
                            <p>Get a personalized plan recommendation</p>
                        </div>

                        <div>
                            <span><IoMdCheckmark /></span>
                            <p>View samples from businesses like yours</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='contactHomeRight'>
                <form className='formSec' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Name'/>
                <input type="text" name="company_name" placeholder='Company Name'/>
                <input type="email" name="user_email" placeholder='Email' />
                <div className='dropdownSec'>
                    <p>How do you get your video editing done?</p>
                    <select id="country" name="user_dropdown1">
                        <option  value="">please select</option>
                        <option value="I don't">I don't</option>
                        <option value="I do it myself">I do it myself</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="In-house">In-house</option>
                        <option value="Agency">Agency</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='dropdownSec'>
                    <p>Which monthly plan feels right for your business needs?</p>
                    <select id="country" name="user_dropdown2">
                        <option value="">please select</option>
                        <option value="$748/month works for me">$748/month works for me</option>
                        <option value="$1,666/month fits my goals">$1,666/month fits my goals</option>
                        <option value="I might need a custom plan">I might need a custom plan</option>
                        <option value="This fells beyond my budget">This fells beyond my budget</option>
                    </select>
                </div>
                <div className='checkboxSec'>
                    <p>What are your biggest frustrations with video editing right now?</p>
                    <label><input type="checkbox" name='user_checkbox'  value="No Time for editing" />No Time for editing</label>
                    <label><input type="checkbox" name='user_checkbox'  value="Slow Turnaround" />Slow Turnaround</label>
                    <label><input type="checkbox" name='user_checkbox'  value="Low qality" />Low qality</label>
                    <label><input type="checkbox" name='user_checkbox'  value="Too expensive" />Too expensive</label>
                    <label><input type="checkbox" name='user_checkbox'  value="Communiction issues" />Communiction issues</label>
                    <label><input type="checkbox" name='user_checkbox'  value="Inconsistent results" />Inconsistent results</label>
                    <label><input type="checkbox" name='user_checkbox'  value="No clear workflow" />No clear workflow</label>
                    <label><input type="checkbox" name='user_checkbox'  value="No scalable resources" />No scalable resources</label>
                    <label><input type="checkbox" name='user_checkbox'  value="other" />other</label>
                </div>
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
                        <p>support@ryzmedia.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Information</h5>
                        <p>info@rayzmedia.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>General Contact</h5>
                        <p>contact@rayzmedia.com</p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>
                
                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Collaboration</h5>
                        <p>collab@rayzmedia.com</p>
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
import React from 'react'
import './about.css'
import videoFile from "../homePageVideo.mp4"
import { AiOutlinePicture } from 'react-icons/ai'
import { BsBoxArrowRight } from 'react-icons/bs'
import { GiMusicalNotes } from 'react-icons/gi'
import { TbEditOff, TbTextRecognition } from 'react-icons/tb'
import { LiaPhotoVideoSolid } from 'react-icons/lia'
import { PiMicrosoftOutlookLogoBold } from 'react-icons/pi'
import { IoMdCheckmark } from 'react-icons/io'
import Testimonial from '../testimonial/Testimonial'
import FollowUs from '../FollowUs/FollowUs'
import { Link } from 'react-router-dom'


function About() {
  return (
    <>
    
        <div className='about'>
            

          <div className='Abouthome'>
        
              
                <div className='ahomeLeft'>

        
                  <h3>Earnedits</h3>
                  <h1 className='aLeftH1'>Built by Editors - For Editors</h1>
                  <p className='aleftSimpleP'>We believe editors should spend less 
                      time searching and more time creating.
                  </p>
                    
                  <div className='aleftBtnD'>
                        <button className='aleftBtn1'><Link to="/projects" >Browse Projects</Link></button>
                        <button className='aLeftBtn2'><Link to="/contact" >Contact Us</Link></button>
                  </div>
                </div>

                <div className='ahomeRight'>

                   

                  

                  <div className='arightVideo'>
                    <div><video  autoPlay loop  muted  src={videoFile}></video></div>
                    <div className='tranImg'></div>
                    

                    
                  </div>
        
                  {/* <div className='arightBox'>
                    <p>Graphic overlay</p>
                    <div className='arightBox1'><div><BsBoxArrowRight/></div> <div>Choose file</div></div>
                    <div className='arightBox1'><div><TbTextRecognition/></div> <div>Text overlay</div></div>
                    <div className='arightBox1'><div><AiOutlinePicture/></div> <div>Logo.png</div></div>
                    <div className='arightBox1'><div><GiMusicalNotes/></div> <div>Music.mp3</div></div>
                  </div> */}

                  
                </div>

                

                
          </div>

          <div className='helpEditors'>
            <h4>We Help Video Editors:</h4>

            <div className='helpBoxSec'>

              <div className='helpBox'>
              <div><TbEditOff /></div>
              <h5>Learn from Real Viral Edits</h5>
              <p>Study real timelines from projects that actually performed
                 well - not theory or fake demos.
              </p>
            </div>

              <div className='helpBox'>
              <div><TbEditOff /></div>
              <h5>Learn from Real Viral Edits</h5>
              <p>Study real timelines from projects that actually performed
                 well - not theory or fake demos.
              </p>
            </div>

              <div className='helpBox'>
              <div><TbEditOff /></div>
              <h5>Learn from Real Viral Edits</h5>
              <p>Study real timelines from projects that actually performed
                 well - not theory or fake demos.
              </p>
            </div>

            </div>
          </div>

          <div className='ChoseBox1'>
                          <div className='leftSec'>
                              <h5>Our Vision</h5>
                              
                              <p>We believe that when editors help editors, everyone moves forward faster.</p>
                              <p>By sharing real workflows, editable timelines, and proven ideas, we aim to:</p>
                              <div>
                                  <div><IoMdCheckmark /></div><p>Reduce creative stress</p>
                              </div>
          
                              <div>
                                  <div><IoMdCheckmark /></div><p>Eliminate unnecessary trial and error</p>
                              </div>
          
                              <div>
                                  <div><IoMdCheckmark /></div><p>Create a learning environment built on real work, not theory</p>
                              </div>

                              <p>Growth should happen naturally – through doing, not searching.</p>
          
                          </div>
                          <div className='rightSec'></div>
          </div>

            
          <div className='earnEidts'>
            <div className='eEdits'>

              <h4 className='eEditsH4'>Our Goal</h4>
              <p className='eEditsP1'>Our goal is to help video editors focus 
                on creating great work without wasting time, second-guessing 
                ideas, or starting from scratch.
              </p>

              <div  className='eEditsBox'>


              <div className='boxItem boxImga'>
                <div className='boxItemDiv'>
                  <h6>Learn Faster</h6>
                   <p>Study real project timelines and understand how 
                    viral edits are actually built - step by step.
                  </p>
                </div>
          
              </div>

        
              <div className='boxItem boxImgb'>
                <div className='boxItemDiv'>
                  <h6>Re-edit Proven Ideas</h6>
                  <p>Not generic templates — but actual viral edits
                    recreated and packaged as open AE projects.
                  </p>
                </div>
              </div>

              <div className='boxItem boxImgc'>
                <div className='boxItemDiv'>
                 <h6>Finish Projects Faster</h6>
                  <p>Not generic templates — but actual viral edits
                    recreated and packaged as open AE projects.
                  </p>
                </div>
              </div>

              <div className='boxItem boxImgd'>
                <div className='boxItemDiv'>
                  <h6>Proven Ideas</h6>
                  <p>Not generic templates — but actual viral edits
                    recreated and packaged as open AE projects.
                  </p>
                </div>
              </div>


              </div>

              <p className='eEditsPha'>EarnEdits exists to make editing simpler,
                 faster, and more reliable - especially when deadlines matter.
              </p>

            </div>
          </div>





          <FollowUs />
          <Testimonial />

        </div>
    
    </>
  )
}

export default About
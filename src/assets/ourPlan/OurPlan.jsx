import React from 'react'
import './ourPlan.css'
import backImg from '../plan-banner-image.webp'

import { IoMdCheckmark, IoMdCheckmarkCircle } from 'react-icons/io'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import ExploreOurCollection from '../explorOurCollection/ExploreOurCollection'
function OurPlan() {
  return (
    <>
    
    <div  className='ourPlan'>

        <div className='finishProjects'>
            <img src={backImg} alt="" />
            <div>
                <h2>Finish Your Projects Faster,</h2>
                <h4>Just Re-Edit Proven Ideas</h4>
            </div>
           
        </div>

        <div className='subscription'>
            <div className='upperSec'>
                <h3>One Subscription. Unlimited Viral Edits.</h3>
                <p>Get unlimited access to real, open After
                     Effects projects - built to help you study
                      professional timelines, re-edit proven 
                    ideas, and complete your projects faster.
                </p>
            </div>

            <div className='downSec'>

                <div className='downSecBox'>
                    
                    <div className='downSecBoxUp'>
                        <p><h5>$96 </h5>  /year $324 (Save over 70%)
                            Everything you need to start editing
                        </p>
                        <div>Monthly Plan</div>
                    </div>
                    <div className='downSecBoxMiddle'><button>Start Monthly Access</button></div>
                    <div className='downSecBoxDown'>

                        <div className='downLines'>
                            <div><IoCheckmarkOutline /></div> 
                            <p>Access to every new project added weekly.</p>
                        </div>

                        <div className='downLines'>
                            <div><IoCheckmarkOutline /></div> 
                            <p>Access to every new project added weekly.</p>
                        </div>

                        <div className='downLines'>
                            <div><IoCheckmarkOutline /></div> 
                            <p>Access to every new project added weekly.</p>
                        </div>

                    </div>

                </div>

                <div className='downSecBox'>
                    
                    <div className='downSecBoxUp'>
                        <p><h5>$96 </h5>  /year $324 (Save over 70%)
                            Everything you need to start editing
                        </p>
                        <div>Monthly Plan</div>
                    </div>
                    <div className='downSecBoxMiddle'><button>Start Monthly Access</button></div>
                    <div className='downSecBoxDown'>

                        <div className='downLines'>
                            <div><IoCheckmarkOutline /></div> 
                            <p>Access to every new project added weekly.</p>
                        </div>

                        <div className='downLines'>
                            <div><IoCheckmarkOutline /></div> 
                            <p>Access to every new project added weekly.</p>
                        </div>

                        <div className='downLines'>
                            <div><IoCheckmarkOutline /></div> 
                            <p>Access to every new project added weekly.</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div className='founderdiv'>

            <div className='founder1'>
               
                    <div>
                         <div className='imgeF'></div> 
                         <h3>Message from the founder</h3>
                    </div>

                    <p>Lorem, ipsum dolor sit amet
                         consectetur adipisicing elit. Deleniti,
                          temporibus. Aspernatur at omnis magnam voluptates
                           qui. Architecto, ipsa molestiae
                         eaque officia, aliquam neque vero sit
                          temporibus quos distinctio eius fugit!
                    </p>
                    <p>Lorem, ipsum dolor sit amet
                         consectetur adipisicing elit. Deleniti,
                          temporibus. Aspernatur at omnis magnam voluptates
                           qui. Architecto, ipsa molestiae
                         eaque officia, aliquam neque vero sit
                          temporibus quos distinctio eius fugit!
                    </p>
                    <p>Lorem, ipsum dolor sit amet
                         consectetur adipisicing elit. Deleniti,
                          temporibus. Aspernatur at omnis magnam voluptates
                           qui. Architecto, ipsa molestiae
                         eaque officia, aliquam neque vero sit
                          temporibus quos distinctio eius fugit!
                    </p>

                    {/* <h4>We added our latest project file: 7 hours ago</h4>
                    <p>At EarnEdits, we consistently release new After Effects 
                        project files created by verified  creators.
                    </p>
                    <p>Every file is carefully reviewed to 
                     guarantee viral-ready quality, clean structure, 
                     organized timelines, and proven real-world execution.
                    </p> */}
                
                
            </div>
        </div>

        <ExploreOurCollection />

        <div className='whyChoseUs'>
            <h4>Why Editors Choose the EarnEdits Subscription ?</h4>
            <p className='whyChoseUsP1'>Buying one project helps once. Accessing a 
                growing library helps every time.
            </p>
            
            <div className='ChoseBox1'>
                <div className='leftSec'>
                    <h5>With EarnEdits, you always have:</h5>

                    <div>
                        <div><IoMdCheckmark /></div><p>A starting point for new client work.</p>
                    </div>

                    <div>
                        <div><IoMdCheckmark /></div><p>A starting point for new client work.</p>
                    </div>

                    <div>
                        <div><IoMdCheckmark /></div><p>A starting point for new client work.</p>
                    </div>
                    <p>Finish projects faster. Learn smarter. Deliver better results.</p>

                </div>
                <div className='rightSec'></div>
            </div>

            <div className='ChoseBox2'>
                <div className='leftSect'>
                    <h5>Built by Editors - For Editors</h5>
                    <p className='secP'>Every project on EarnEdits is:</p>

                    <div>
                        <h6>Smooth Motion Graphics</h6>
                        <p>Every project is built with clean, smooth motion
                             that feels natural and professional. All keyframes
                              
                        </p>
                    </div>

                    <div>
                        <h6>Smooth Motion Graphics</h6>
                        <p>Every project is built with clean, smooth motion
                             that feels natural and professional. All keyframes
                             
                        </p>
                    </div>

                    <div>
                        <h6>Smooth Motion Graphics</h6>
                        <p>Every project is built with clean, smooth motion
                             that feels natural and professional. All keyframes
                              
                        </p>
                    </div>

                    

                </div>
                <div className='rightSect'>
                </div>
            </div>


            <div className='chooseUsNTS'>
                <p>This is not a template store. 
                    This is a learning + production library.
                </p>
            </div>

        </div>


    </div>
    
    </>
  )
}

export default OurPlan
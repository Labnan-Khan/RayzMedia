import React, { useState } from 'react'
import './home.css'
import { BsBoxArrowRight } from 'react-icons/bs'
import { TbBrandAdobeAfterEffect, TbTextRecognition } from 'react-icons/tb'
import { AiOutlinePicture } from 'react-icons/ai'
import { GiMusicalNotes } from 'react-icons/gi'
import videoFile from "../homePageVideo.mp4"
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import { PiXLogo } from 'react-icons/pi'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { TfiPinterest } from 'react-icons/tfi'
import Testimonial from '../testimonial/Testimonial'
import ExploreOurCollection from '../explorOurCollection/ExploreOurCollection'
import FollowUs from '../FollowUs/FollowUs'
import { Link } from 'react-router-dom'
function Home() {
  const [showImg,SetShowImg] = useState(true)
  const [imgPosition, setImgPosition] = useState(["aLeft" ,"bLeft" ,"cLeft" , "Middle" , "aRight", "bRight", "cRight"])

  return (
    <>
    <div className='home'>
        <div className='homeLeft'>


            <p className='leftP1'>Built by Editors — for Editors</p>

            <h1 className='LeftH1'>The #1 Marketplace
                 for Viral After Effects
                  Project Files</h1>

            <p className='leftP2'>Built by Editors — for Editors</p>

            <p className='leftSimpleP'>After Effects project files inspired by real viral trends — built to help editors learn better
                 and create faster by re-editing proven ideas.</p>
            
            <div className='leftBtnD'>
                <button className='leftBtn1'><Link to="/projects" >Browse Projects</Link></button>
                <button className='LeftBtn2'><Link to="/contact" >Contact Us</Link></button>
            </div>
        </div>
        <div className='homeRight'>
          <div className='rightVideo'>
            <div><video  autoPlay loop  muted  src={videoFile}></video></div>
          </div>

          <div className='rightBox'>
            <p>Graphic overlay</p>
            <div className='rightBox1'><div><BsBoxArrowRight/></div> <div>Choose file</div></div>
            <div className='rightBox1'><div><TbTextRecognition/></div> <div>Text overlay</div></div>
            <div className='rightBox1'><div><AiOutlinePicture/></div> <div>Logo.png</div></div>
            <div className='rightBox1'><div><GiMusicalNotes/></div> <div>Music.mp3</div></div>
          </div>
        </div>
    </div>


    

    {/* HowEarnedits Works */}

    <div className='hEWork'>
      <div className='EWork'>
        <h4 className='EWorkH4'>How Earnedits Works</h4>
        <p className='EWorkP'>A simple 3-step workflow built
           for video editors who want fast,
           customizable, viral-ready edits.
        </p>

        <div className='EWorkSec'>
          <div className='EWorkSecLeft'>
            <p className='LeftP1'>Step:01</p>
            <h5 className='LeftH5'>Choose Your Viral Video project</h5>
            <p className='LeftP2'>Dive into a curated library of viral-style reel
               projects created by professional motion designers.
                Each template is built around trending formats, 
                fast-paced transitions, beat-synced cuts, and modern
                 visual styles. Whether you're aiming for aesthetic
                  edits, cinematic sequences, or high-energy promos, 
                  you’ll find a variety of templates crafted specifically 
                  to help your content stand out and perform on
               Instagram, TikTok, and YouTube Shorts.
            </p>
          </div>

          <div className='EWorkSecRight rightSec1'>
            <video src={videoFile} autoPlay muted loop></video>
            <video src={videoFile} autoPlay muted loop></video>
            <video src={videoFile} autoPlay muted loop></video>
          </div>
        </div>

        <div className='EWorkLine1'>
          <div></div>
        </div>

        <div className='EWorkSec eworksec2'>
          <div className='EWorkSecLeft'>
            <p className='LeftP1'>Step:02</p>
            <h5 className='LeftH5'>Learn, Edit, and Use Freely</h5>
            <p className='LeftP2'>Open the project in After Effects and 
                 customize every element to match your style. Replace your
                video clips, switch colors, fine-tune transitions, adjust
                typography, or modify timing with ease. Once you’re done,
                simply export your reel and publish it — delivering a 
                polished, viral-ready
                edit in a fraction of the time it usually takes.
            </p>
          </div>

          <div className='EWorkSecRight rightSec2'>
          </div>
        </div>

        <div className='EWorkLine2'>
          <div></div>
        </div>

        <div className='EWorkSec'>
          <div className='EWorkSecLeft'>
            <p className='LeftP1'>Step:03</p>
            <h5 className='LeftH5'>Download the Open AEP File</h5>
            <p className='LeftP2'>Choose the project you love, complete the 
                purchase, and instantly receive the full Adobe After Effects
                 source file. Every download includes organized layers, 
                 effect presets, timing markers, placeholders, and editable
                 text/composition settings. No waiting — the file is delivered 
                 immediately so you can start editing without delay.
            </p>
          </div>

          <div className='EWorkSecRight rightSec3'>
          </div>
        </div>

        
      </div>

    </div>



          {/* explorCollection after home css  */}
      
      <ExploreOurCollection />
     
       {/* whats Included after explorCollection */}

      <div className='inclu'>
        <div className='incluDiv'>
          <h3>What is Included?</h3>
          <p className='para'>Everything you need to customize your viral edit quickly and 
            professionally - all neatly organized
             inside one Adobe After Effects project.
          </p>

          <div className='incluBox'>

            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 <p>Item 01</p>
              </div>
              <div>
                <h5>Full .AEP File</h5>
                <p>Get the complete Adobe After Effects project
                 file, including all compositions, effects, and 
                animation layers — fully editable and ready for customization.
                </p>
              </div>
              
            </div>

            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 <p>Item 01</p>
              </div>
              <div>
                <h5>Full .AEP File</h5>
                <p>Get the complete Adobe After Effects project
                 file, including all compositions, effects, and 
                animation layers — fully editable and ready for customization.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 <p>Item 01</p>
              </div>
              <div>
                <h5>Full .AEP File</h5>
                <p>Get the complete Adobe After Effects project
                 file, including all compositions, effects, and 
                animation layers — fully editable and ready for customization.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 <p>Item 01</p>
              </div>
              <div>
                <h5>Full .AEP File</h5>
                <p>Get the complete Adobe After Effects project
                 file, including all compositions, effects, and 
                animation layers — fully editable and ready for customization.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 <p>Item 01</p>
              </div>
              <div>
                <h5>Full .AEP File</h5>
                <p>Get the complete Adobe After Effects project
                 file, including all compositions, effects, and 
                animation layers — fully editable and ready for customization.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 <p>Item 01</p>
              </div>
              <div>
                <h5>Full .AEP File</h5>
                <p>Get the complete Adobe After Effects project
                 file, including all compositions, effects, and 
                animation layers — fully editable and ready for customization.
                </p>
              </div>
              
            </div>
            

          </div>
        </div>

      </div>

      {/* inside the timeline after what is included */}

    <div className='inTimeline'>
      <div className='timelineBox'>

        <div className='timelineLeft'>
          <h4>Inside the Timeline</h4>
          <p>A behind-the-scenes look at
             the real After Effects workflow you’ll
             receive - organized, clean, and editor-friendly.
          </p>
          <div className='leftBoxBtn'>
            <button><CgChevronLeft className='leftBoxIcon' onClick={()=> setImgPosition(prev => [...prev.slice(1), prev[0]])}/></button>
            <button><CgChevronRight className='leftBoxIcon' onClick={()=> setImgPosition(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])}/></button>
          </div>
        </div>

        <div className='timelineRight'>
          <div className={`div1 ${(imgPosition[0] == "middle")? "timelineImg" : ""} ${imgPosition[0]}`}>1</div>
          <div className={`div1 ${(imgPosition[1] == "middle")? "timelineImg" : ""} ${imgPosition[1]}`}>2</div>
          <div className={`div1 ${(imgPosition[2] == "middle")? "timelineImg" : ""} ${imgPosition[2]}`}>3</div>
          <div className={`div2 ${(imgPosition[3] == "middle")? "timelineImg" : ""} ${imgPosition[3]}`}>4</div>
          <div className={`div3 ${(imgPosition[4] == "middle")? "timelineImg" : ""} ${imgPosition[4]}`}>5</div>
          <div className={`div3 ${(imgPosition[5] == "middle")? "timelineImg" : ""} ${imgPosition[5]}`}>6</div>
          <div className={`div3 ${(imgPosition[6] == "middle")? "timelineImg" : ""} ${imgPosition[6]}`}>7</div>
        </div>

      </div>
    </div>

    {/* why Chose EarnEdits after inside the timeline */}

    <div className='earnEidts'>
      <div className='eEdits'>

        <h4 className='eEditsH4'>Why Choose EarnEdits?</h4>
        <p className='eEditsP1'>Built for editors who want real
           viral-style
           projects - not generic templates.
      </p>

      <div  className='eEditsBox'>


        <div className='boxItem boxImg1'>
          <div className='boxItemDiv'>
             <h6>Real Viral Projects Inspired by TikTok & IG</h6>
             <p>Not generic templates — but actual viral edits
             recreated and packaged as open AE projects.
             </p>
          </div>
          
        </div>

        
        <div className='boxItem boxImg2'>
          <div className='boxItemDiv'>
             <h6>Real Viral Projects Inspired by TikTok & IG</h6>
             <p>Not generic templates — but actual viral edits
             recreated and packaged as open AE projects.
             </p>
          </div>
          
        </div>

        <div className='boxItem boxImg3'>
          <div className='boxItemDiv'>
             <h6>Real Viral Projects Inspired by TikTok & IG</h6>
             <p>Not generic templates — but actual viral edits
             recreated and packaged as open AE projects.
             </p>
          </div>
          
        </div>

        <div className='boxItem boxImg4'>
          <div className='boxItemDiv'>
             <h6>Real Viral Projects Inspired by TikTok & IG</h6>
             <p>Not generic templates — but actual viral edits
             recreated and packaged as open AE projects.
             </p>
          </div>
          
        </div>


      </div>

      </div>
    </div>

   

 {/* Follow us after why chose earnedits */}


    <FollowUs />

    <Testimonial />

    </>
  )
}

export default Home
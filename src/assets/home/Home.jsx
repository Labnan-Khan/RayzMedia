import React, { useEffect, useState } from 'react'
import './home.css'
import { BsBoxArrowRight } from 'react-icons/bs'
import { TbBrandAdobeAfterEffect, TbTextRecognition } from 'react-icons/tb'
import { AiOutlinePicture } from 'react-icons/ai'
import { GiMusicalNotes } from 'react-icons/gi'
import videoFile from "../homePageVideo.mp4"
import videoFile1 from "../homePageVideo1.mp4"
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
  const textToAnimate = ["Creators", "Influencers", "Realtors", "Poadcastors", "Businessess"]
  const [indexWord,setIndexWord] = useState(0)
  const [fade, setFade] = useState(false);

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [showImg,SetShowImg] = useState(true)
  const [imgPosition, setImgPosition] = useState(["cLeft" , "Middle" , "aRight"])
  const [imgPositionHeading,setImgPositionHeading]= useState(["Request","Review","Download"])
  const [imgPositionPer,setImgPositionPer]= useState(["Request a quick video edits ","Give feedback or request revisions if needed","Get final video in any format or size "])


 const [clients, setClients] = useState(0);
  const [videos, setVideos] = useState(0);
  const [views, setViews] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setFade(false); // hide (start wipe out)

    setTimeout(() => {
      setIndexWord((prev) => (prev + 1) % textToAnimate.length);
      setFade(true); // show (wipe in)
    }, 400); // match CSS animation time
  }, 2000);

    return () => clearInterval(interval);
}, []);

useEffect(()=>{
  if(imgPosition[0]=="middle"){
    setImgPositionHeading("1 Request")
  }
   else if(imgPosition[1]=="middle"){
    setImgPositionHeading("2 Review")
  }
   else if(imgPosition[2]=="middle"){
    setImgPositionHeading("3 Download")
  }
  
},[imgPosition])


  useEffect(() => {
    const duration = 2500;

    const animate = (setFunc, end) => {
      let startTime = null;

      const run = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        const value = Math.min(
          Math.floor((progress / duration) * end),
          end
        );

        setFunc(value);

        if (progress < duration) {
          requestAnimationFrame(run);
        }
      };

      requestAnimationFrame(run);
    };

    animate(setClients, 100);
    animate(setVideos, 500);
    animate(setViews, 5000000); // 5M

  }, []);

  // format 5M nicely
  // const formatViews = (num) => {
  //   if (num >= 0) return Math.floor(num / 1000000) + "M+";
  //   return num + "+";
  // };


const rightClickButton =()=>{
  setImgPosition(prev => [...prev.slice(1), prev[0]]);
   setImgPositionHeading(prev => [...prev.slice(1), prev[0]])
   setImgPositionPer(prev => [...prev.slice(1), prev[0]])
}

const leftClickButton = ()=>{
  setImgPosition(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
  setImgPositionHeading(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
  setImgPositionPer(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
}

  return (
    <>
    <div className='home'>
        <div className='homeLeft'>


            <p className='leftP1'>Built by Editors — for Editors</p>

            <h1 className='LeftH1'>The #1 High-performance agency built for 
              <p className={`homeLeftP1 ${fade ? "showText": "hideText"}`}>
                 <span key={indexWord}>{textToAnimate[indexWord]}</span>
                </p> 
            </h1>

            <p className='leftP2'>Built by Editors — for Editors</p>

            <p className='leftSimpleP'>Rayzmedia is a high-performance video editing & marketing agency built 
              for those who want to stand out ,go viral and scale faster </p>
            
            <div className='leftBtnD'>
                <button className='leftBtn1'><Link to="/projects" >Explore Projects</Link></button>
                <button className='LeftBtn2'><Link to="/contact" >Lets Build</Link></button>
            </div>
            <div className='leftBwllowBtns'>
              <div>
                <h6>{clients}+</h6>
                <p>Happy Clients</p>
              </div>

              <div>
                <h6>{videos}+</h6>
                <p>Video Edites</p>
              </div>

              <div>
                <h6>{views}+</h6>
                <p>Views Genrated</p>
              </div>

            </div>
        </div>
        <div className='homeRight'>
          <div className='rightVideo'>
            <div><video  autoPlay loop  muted  src={videoFile1}></video></div>
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
        <h4 className='EWorkH4'>How it Works</h4>
        <p className='EWorkP'>Lets break this ddown in few 
          simple steps
        </p>

        <div className='EWorkSec'>
          <div className='EWorkSecLeft'>
            <p className='LeftP1'>Step:01</p>
            <h5 className='LeftH5'>You Create, We Elevate</h5>
            <p className='LeftP2'>From raw footage to refined seamless 
              edits polished to perfection,
              ready to publish without any pressure.
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
            <h5 className='LeftH5'>Fast Turnaround</h5>
            <p className='LeftP2'>Your content, expertly shaped and delivered within 24
              hours, without compromising on precision or details.
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
            <h5 className='LeftH5'>Streamlined process</h5>
            <p className='LeftP2'>A smooth, efficient editing system 
              designed to save you time and keep your
              content flowing while you stay focused on scaling. 
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
          <h3>What do we offer?</h3>
          <p className='para'> From concept to final delivery we manage
            everything so you can focus on scaling your brand.
          </p>

          <div className='incluBox'>

            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 {/* <p>Item 01</p> */}
              </div>
              <div>
                <h5>Video Editing </h5>
                <p>We go beyond basic cuts crafting visually compelling videos
                   with seamless transitions, refined pacing, and a polished
                   finish that keeps your audience engaged from start to end.
                </p>
              </div>
              
            </div>

            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 {/* <p>Item 02</p> */}
              </div>
              <div>
                <h5>Saas animation</h5>
                <p>We create premium animations designed to communicate your
                   product clearly and effectively — perfect for explainer videos
                   that elevate your brand and build trust instantly.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 {/* <p>Item 03</p> */}
              </div>
              <div>
                <h5>Content Strategy</h5>
                <p>We develop data-driven strategies tailored to your audience
                   helping you create content that attracts attention,
                   builds authority, and drives consistent growth.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 {/* <p>Item 04</p> */}
              </div>
              <div>
                <h5>Multi-Platform Optimization</h5>
                <p> Your content is tailored for every platform ensuring the 
                  right format, style, and structure to maximize reach,
                   performance, and visibility across all channels.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 {/* <p>Item 05</p> */}
              </div>
              <div>
                <h5> Ads & Marketing</h5>
                <p>produce high-performing video ads designed to turn viewers 
                  into customers — specializing in Meta and Google ads, 
                  product promotions, and sales-driven content.
                </p>
              </div>
              
            </div>
            
            <div className='incluContainer'>

              <div className='iconDiv'>
                <TbBrandAdobeAfterEffect className='iCon'/>
                 {/* <p>Item 06</p> */}
              </div>
              <div>
                <h5>Social media management</h5>
                <p>We handle your content distribution, posting, and
                   platform management — so you can focus on growing your business
                   while we expand your brand presence.
                </p>
              </div>
              
            </div>
            

          </div>
        </div>

      </div>

      {/* inside the timeline after what is included */}

    <div className='inTimeline'>
      <h4>Request Video Edits </h4>
      <div className='timelineBox'>

        <div className='timelineLeft'>
          <h3>{imgPositionHeading[1]}</h3>
          <p>{imgPositionPer[1]}</p>
          <div className='leftBoxBtn'>
            <button><CgChevronLeft className='leftBoxIcon' onClick={leftClickButton}/></button>
            <button><CgChevronRight className='leftBoxIcon' onClick={rightClickButton}/></button>
          </div>
        </div>

        <div className='timelineRight'>
          <div className={`div1 ${(imgPosition[0] == "middle")? "timelineImg" : ""} ${imgPosition[0]}`}>1</div>
          <div className={`div1 ${(imgPosition[1] == "middle")? "timelineImg" : ""} ${imgPosition[1]}`}>2</div>
          <div className={`div1 ${(imgPosition[2] == "middle")? "timelineImg" : ""} ${imgPosition[2]}`}>3</div>
        </div>

      </div>
    </div>

    {/* why Chose EarnEdits after inside the timeline */}

    <div className='earnEidts'>
      <div className='eEdits'>

        <h4 className='eEditsH4'>Why Choose Rayzmedia?</h4>
        <p className='eEditsP1'>Because average content gets ignored.</p>

      <div  className='eEditsBox'>


        <div className='boxItem boxImg1'>
          <div className='boxItemDiv'>
             <h6>We Edit for Attention</h6>
             <p>We don’t edit for aesthetics.Every video is crafted to capture attention, 
              increase retention, and drive real engagement across platforms.
             </p>
          </div>
          
        </div>

        
        <div className='boxItem boxImg2'>
          <div className='boxItemDiv'>
             <h6>We Deliver Premium Results</h6>
             <p>From motion graphics to sound design, we deliver polished,
               high-end edits that reflect
               your brand and elevate your content above the noise.
             </p>
          </div>
          
        </div>

        <div className='boxItem boxImg3'>
          <div className='boxItemDiv'>
             <h6>We Deliver Premium Results</h6>
             <p>From motion graphics to sound design, we deliver 
              polished, high-end edits that reflect your 
              brand and elevate your content above the noise.
             </p>
          </div>
          
        </div>

        <div className='boxItem boxImg4'>
          <div className='boxItemDiv'>
             <h6>We Help You Grow</h6>
             <p>Whether you're a personal brand or a
               growing business, our editing systems are designed 
              to help you stay consistent, save time, and grow faster.
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
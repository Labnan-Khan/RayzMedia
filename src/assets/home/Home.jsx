import React, { useEffect, useState } from 'react'
import './home.css'
import { BsBoxArrowRight } from 'react-icons/bs'
import { TbBrandAdobeAfterEffect, TbTextRecognition } from 'react-icons/tb'
import { AiOutlinePicture } from 'react-icons/ai'
import { GiMusicalNotes } from 'react-icons/gi'
// import videoFile from "../homePageVideo.mp4"
import videoFile1 from "../homePageVideo1.mp4"
import videoFile2 from "../Homepage-animation2.mp4"
import videoFile3 from "../homePage-animaation3.mp4"
import videoMuted1 from "../homepageCompressed1.mp4"
import videoMuted2 from "../homepageCompressed2.mp4"
import videoMuted3 from "../homepageCompressed3.mp4"
// import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
// import { PiXLogo } from 'react-icons/pi'
// import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
// import { ImYoutube } from 'react-icons/im'
// import { FaFacebookF, FaInstagram } from 'react-icons/fa'
// import { TfiPinterest } from 'react-icons/tfi'
import Testimonial from '../testimonial/Testimonial'
import ExploreOurCollection from '../explorOurCollection/ExploreOurCollection'
import FollowUs from '../FollowUs/FollowUs'
import { Link } from 'react-router-dom'
import requestVideoEdits1 from '../request-video-eits1.mp4'
import requestVideoEdits2 from '../request-video-eits2.mp4'
import requestVideoEdits3 from '../request-video-eits3.mp4'
import whatDoWeOfferVideo from '../What.DO.We.OfferAnimation.mp4'




function Home() {
  const textToAnimate = ["Creators", "Influencers", "Realtors", "Poadcastors", "Businessess"]
  const [indexWord,setIndexWord] = useState(0)
  const [fade, setFade] = useState(false);

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // const [showImg,SetShowImg] = useState(true)
  const [fadeVideo, setFadeVideo] = useState(true);

  const [requestVieoEdits, setVideoEitds] = useState([requestVideoEdits1 , requestVideoEdits2 , requestVideoEdits3])

  const [rVEPosition, setRVEPosition] = useState(0)
  // const [imgPositionHeading,setImgPositionHeading]= useState(["Request","Review","Download"])
  // const [imgPositionPer,setImgPositionPer]= useState(["Request a quick video edits ","Give feedback or request revisions if needed","Get final video in any format or size "])


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

// useEffect(()=>{
//   if(imgPosition[0]=="middle"){
//     setImgPositionHeading("1 Request")
//   }
//    else if(imgPosition[1]=="middle"){
//     setImgPositionHeading("2 Review")
//   }
//    else if(imgPosition[2]=="middle"){
//     setImgPositionHeading("3 Download")
//   }
  
// },[imgPosition])


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

const handleChangeVideo = (index) => {
   if (index === rVEPosition) return;
  setFade(false); // fade out

  setTimeout(() => {
    setRVEPosition(index); // change video
    setFade(true); // fade in
  }, 500); // match CSS duration
};


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
            <div><video autoPlay  loop  muted playsInline preload="metadata"   src={videoFile1}></video></div>
            {/* <video autoPlay  loop  muted playsInline preload="metadata"   src={videoFile1}></video> */}
            <h4 className='rayzh4'>Rayzmedia</h4>
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


    

    {/* How its Works */}

    <div className='hEWork'>
      <div className='EWork'>
        <h4 className='EWorkH4'>How it Works</h4>
        <p className='EWorkP'>Lets break this down in few 
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

            <div className='row1st'>
              <div></div>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className='row2nd'>
              <span></span>
              <span></span>
            </div>

            <div className='row3rd'>
                <div>
                    <video src={videoMuted1} autoPlay muted loop  playsInline preload="metadata" ></video>
                    <span><div></div></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <video src={videoMuted2} autoPlay muted loop  playsInline preload="metadata" ></video>
                    <span><div></div></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <video src={videoMuted3} autoPlay muted loop  playsInline preload="metadata" ></video>
                    <span><div></div></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
          
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
            <video src={videoFile2} autoPlay muted loop  playsInline preload="metadata" ></video>
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
            <video src={videoFile3} autoPlay muted loop  playsInline preload="metadata"></video>
          </div>
        </div>

        
      </div>

    </div>



          {/* explorCollection   */}
      
      <ExploreOurCollection />
     
       {/* what do we offer after explorCollection */}

      <div className='inclu'>
        <div className='incluDiv'>
          <h3>What do we offer?</h3>
          <p className='para'> From concept to final delivery we manage
            everything so you can focus on scaling your brand.
          </p>

          <div className='incluBox'>

            <div className='incluContainer'>

              <div className='iconDiv'>
                {/* <TbBrandAdobeAfterEffect className='iCon'/> */}
                <div className='iCon'>
                  <div className='iCon1'></div>
                </div>
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
                <div className='iCon'>
                  <div className='iCon2'></div>
                </div>
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
                <div className='iCon'>
                  <div className='iCon3'></div>
                </div>
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
                <div className='iCon'>
                  <div className='iCon4'>
                      <video src={whatDoWeOfferVideo} autoPlay muted loop  playsInline preload="metadata" ></video>
                  </div>
                </div>
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
                <div className='iCon'>
                  <div className='iCon5'></div>
                </div>
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
                <div className='iCon'>
                  <div className='iCon6'></div>
                </div>
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

      {/* request video edits after what is included */}

    <div className='inTimeline'>
      <h4>Request Video Edits </h4>
      <div className='timelineBox'>

        <div className='timelineLeft'>

          <div className={`${(rVEPosition == 0)? "active": ""}`} onClick={()=>handleChangeVideo(0)}>
            <h3>Request</h3>
            <p>Request a quick video edits</p>
          </div>

          <div className={`${(rVEPosition == 1)? "active": ""}`} onClick={()=>handleChangeVideo(1)}>
            <h3>Review</h3>
            <p>Give feedback or request revisions if needed</p>
          </div>

          <div className={`${(rVEPosition == 2)? "active": ""}`} onClick={()=>handleChangeVideo(2)}>
            <h3>Download</h3>
            <p>Get final video in any format or size</p>
          </div>



        </div>

        <div className='timelineRight'>
          {
            requestVieoEdits.map((video, index) =>{
                return (
                    
                    <video className={(rVEPosition == index) ? "show" : "hide"} src={video} autoPlay loop muted  playsInline preload="metadata" ></video>
        
                )
            })
          }
          {/* <video className={fadeVideo ? "show" : "hide"} src={requestVieoEdits[rVEPosition]} autoPlay loop muted ></video> */}
        </div>

      </div>
    </div>

    {/* why Chose rayzmedia after inside the timeline */}

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
             <h6> We Think Like Strategists</h6>
             <p>We combine storytelling, pacing, and platform psychology 
              to turn raw footage into content that actually works.
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
             <h6>We Help, You Grow</h6>
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
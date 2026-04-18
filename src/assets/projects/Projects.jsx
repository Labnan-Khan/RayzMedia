import React, { useEffect, useRef, useState } from 'react'
import './projects.css'
import FollowUs from '../FollowUs/FollowUs'
import video1 from "../ProjectVideosFile/project-page-video1.mp4"
import video2 from "../ProjectVideosFile/project-page-video2.mp4"
import video3 from "../ProjectVideosFile/project-page-video3.mp4"
import video4 from "../ProjectVideosFile/project-page-video4.mp4"
import video5 from "../ProjectVideosFile/project-page-video5.mp4"
import video6 from "../ProjectVideosFile/project-page-video6.mp4"
import video7 from "../ProjectVideosFile/project-page-video7.mp4"
import video8 from "../ProjectVideosFile/project-page-video8.mp4"
import video9 from "../ProjectVideosFile/project-page-video9.mp4"
import video10 from "../ProjectVideosFile/project-page-video10.mp4"
import video11 from "../ProjectVideosFile/project-page-video11.mp4"
import video12 from "../ProjectVideosFile/project-page-video12.mp4"
import video13 from "../ProjectVideosFile/project-page-video13.mp4"
import video14 from "../ProjectVideosFile/project-page-video14.mp4"
import video15 from "../ProjectVideosFile/project-page-video15.mp4"
import video16 from "../ProjectVideosFile/project-page-video16.mp4"
import video17 from "../ProjectVideosFile/project-page-video17.mp4"
import video18 from "../ProjectVideosFile/project-page-video18.mp4"
import video19 from "../ProjectVideosFile/project-page-video19.mp4"
import video20 from "../ProjectVideosFile/project-page-video20.mp4"

import imgTumbnail1 from "../ProjectVideosFile/project-page-video-Thumbnail1.png"
import imgTumbnail2 from "../ProjectVideosFile/project-page-video-Thumbnail2.png"
import imgTumbnail3 from "../ProjectVideosFile/project-page-video-Thumbnail3.png"
import imgTumbnail4 from "../ProjectVideosFile/project-page-video-Thumbnail4.png"
import imgTumbnail5 from "../ProjectVideosFile/project-page-video-Thumbnail5.png"
import imgTumbnail6 from "../ProjectVideosFile/project-page-video-Thumbnail6.png"
import imgTumbnail7 from "../ProjectVideosFile/project-page-video-Thumbnail7.png"
import imgTumbnail8 from "../ProjectVideosFile/project-page-video-Thumbnail8.png"
import imgTumbnail9 from "../ProjectVideosFile/project-page-video-Thumbnail9.png"
import imgTumbnail10 from "../ProjectVideosFile/project-page-video-Thumbnail10.png"
import imgTumbnail11 from "../ProjectVideosFile/project-page-video-Thumbnail11.png"
import imgTumbnail12 from "../ProjectVideosFile/project-page-video-Thumbnail12.png"
import imgTumbnail13 from "../ProjectVideosFile/project-page-video-Thumbnail13.png"
import imgTumbnail14 from "../ProjectVideosFile/project-page-video-Thumbnail14.png"
import imgTumbnail15 from "../ProjectVideosFile/project-page-video-Thumbnail15.png"
import imgTumbnail16 from "../ProjectVideosFile/project-page-video-Thumbnail16.png"
import imgTumbnail17 from "../ProjectVideosFile/project-page-video-Thumbnail17.png"
import imgTumbnail18 from "../ProjectVideosFile/project-page-video-Thumbnail18.png"
import imgTumbnail19 from "../ProjectVideosFile/project-page-video-Thumbnail19.png"
import imgTumbnail20 from "../ProjectVideosFile/project-page-video-Thumbnail20.png"
import { FaPause, FaPlay, FaPlayCircle, FaRegWindowClose } from 'react-icons/fa'
import { IoIosPlay, IoMdClose } from 'react-icons/io'
import Testimonial from '../testimonial/Testimonial'
import AOS from "aos";
import "aos/dist/aos.css";
import { GiPlayButton } from 'react-icons/gi'
import { GoUnmute } from 'react-icons/go'
import { ImVolumeHigh, ImVolumeMute2 } from 'react-icons/im'
import { FaCirclePlay } from 'react-icons/fa6'
import { HiMiniPlay } from 'react-icons/hi2'


function Projects() {
    const [videoSize, setVideoSize] = useState(false)
    const [currentCatageryBtn, setCurrentCatageryBtn] =useState(0)
    const videoTypeListBtn = ["All categories", "Ads", "Agencies", "iGaming", "Youtube", "Creators","Ecommerce", "Entertainment", "Fitness", "Intros", "Lifestyle", "Medical",  "Podcast", "product Ads", "Production Companies", "Real estate", "Languages", "Beauty & Fashion","Personal Brand", "Health & Wellness", "Custom Animation/VFX","Business & Marketing","Coaching & Education", "Course Creators","SAAS", "template-Based Videos", "Text hooks",  "Tiktok & Reel"]
    // const videoList = [video1,video2,video3,video4,video5,video6,video7,video8,video9,video10,video11,video12,video13,video14,video15,video16,video17,video18,video19]
    // const videoTumbnailsList = [imgTumbnail1,imgTumbnail2,imgTumbnail3,imgTumbnail4,imgTumbnail5,imgTumbnail6,imgTumbnail7,imgTumbnail8,imgTumbnail9,imgTumbnail10,imgTumbnail11,imgTumbnail12,imgTumbnail13,imgTumbnail14,imgTumbnail15,imgTumbnail16,imgTumbnail17,imgTumbnail18,imgTumbnail19]

    const videosData = [
  {
    video: video1,
    thumbnail: imgTumbnail1,
    categories: ["Youtube", "Ai", "Personal Brand", "Creators"],
  },
  
  {
    video: video2,
    thumbnail: imgTumbnail2,
    categories: ["Ads", "Real estate", "Tiktok & Reel"],
  },
  {
    video: video7,
    thumbnail: imgTumbnail7,
    categories: ["Real estate", "Creators", "Business & Marketing", "Tiktok & Reel", "Personal Brand"],
  },
  {
    video: video8,
    thumbnail: imgTumbnail8,
    categories: ["Beauty & Fashion", "Tiktok & Reel", "Business & Marketing"],
  },
  {
    video: video15,
    thumbnail: imgTumbnail15,
    categories: ["Tiktok & Reel", "Custom Animation/VFX"],
  },
  {
    video: video16,
    thumbnail: imgTumbnail16,
    categories: ["Tiktok & Reel", "Custom Animation/VFX", "SAAS"],
  },
  {
    video: video14,
    thumbnail: imgTumbnail14,
    categories: ["Ads", "Creators", "Personal Brand", "Business & Marketing", "Tiktok & Reel"],
  },
  
  {
    video: video4,
    thumbnail: imgTumbnail4,
    categories: ["Agencies", "Business & Marketing", "Course Creators", "Tiktok & Reel"],
  },
  {
    video: video5,
    thumbnail: imgTumbnail5,
    categories: ["Real estate", "Creators", "Business & Marketing", "Tiktok & Reel", "Personal Brand"],
  },
  {
    video: video6,
    thumbnail: imgTumbnail6,
    categories: ["Real estate", "Creators", "Business & Marketing", "Tiktok & Reel", "Personal Brand"],
  },

  {
    video: video9,
    thumbnail: imgTumbnail9,
    categories: ["Lifestyle", "Personal Brand", "Tiktok & Reel"],
  },
  {
    video: video12,
    thumbnail: imgTumbnail12,
    categories: ["Lifestyle", "Personal Brand", "Tiktok & Reel"],
  },
  {
    video: video10,
    thumbnail: imgTumbnail10,
    categories: ["Podcast", "Business & Marketing", "Tiktok & Reel"],
  },
  {
    video: video11,
    thumbnail: imgTumbnail11,
    categories: ["Podcast", "Business & Marketing", "Tiktok & Reel", "Ecommerce"],
  },
//   {
//     video: video12,
//     thumbnail: imgTumbnail12,
//     categories: ["Lifestyle", "Personal Brand", "Tiktok & Reel"],
//   },
  {
    video: video13,
    thumbnail: imgTumbnail13,
    categories: ["Custom Animation"],
  },

  {
    video: video3,
    thumbnail: imgTumbnail3,
    categories: ["iGaming", "Ads", "Custom Animation", "Business & Marketing"],
  },
//   {
//     video: video14,
//     thumbnail: imgTumbnail14,
//     categories: ["Ads", "Creators", "Personal Brand", "Business & Marketing", "Tiktok & Reel"],
//   },
//   {
//     video: video15,
//     thumbnail: imgTumbnail15,
//     categories: ["Tiktok & Reel", "Custom Animation/VFX"],
//   },
//   {
//     video: video16,
//     thumbnail: imgTumbnail16,
//     categories: ["Tiktok & Reel", "Custom Animation/VFX", "SAAS"],
//   },
  {
    video: video17,
    thumbnail: imgTumbnail17,
    categories: ["Tiktok & Reel", "Custom Animation/VFX"],
  },
  {
    video: video18,
    thumbnail: imgTumbnail18,
    categories: ["Tiktok & Reel", "Custom Animation/VFX"],
  },
  {
    video: video19,
    thumbnail: imgTumbnail19,
    categories: ["Ads", "Creators", "Personal Brand", "Business & Marketing", "Tiktok & Reel"],
  },
  {
    video: video20,
    thumbnail: imgTumbnail20,
    categories: ["product Ads", "Health & Wellness", "Medical"],
  },
];





    const [currentVideo,setCurrentVideo] = useState([video2,imgTumbnail2])
    const [isPlay, setIsPlay] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [hidePlayButton, setHidePlaayButton] = useState(false)
    const [onOffvideoControl, setOnOffvideoControl] = useState(false)
    useEffect(() => {
        AOS.init({duration: 2000,
             once: false,
             offset:0,
            anchorPlacement: 'top-bottom'});
    }, []);
// handle scoll when video open

    const videoRef = useRef(null)
    // jkl;
    const [progress, setProgress] = useState(0);

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video.duration) return;

        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
        if(percent == 100){
            setIsPlay(false)
        }
    };

    const handleSeek = (e) => {
        const bar = e.currentTarget;
        const clickX = e.nativeEvent.offsetX;
        const width = bar.clientWidth;

        const video = videoRef.current;
        video.currentTime = (clickX / width) * video.duration;
};

const playVideo = () =>{
    const videoPlayed = videoRef.current;
    if(!videoPlayed) return
    
    if(videoPlayed.paused){
        videoPlayed.play();
        setIsPlay(true);
    }else{
        videoPlayed.pause();
        setIsPlay(false)
    }
    setHidePlaayButton(true)
    setOnOffvideoControl(true)
}
const mutedVideo = () =>{
    
    const videoPlayed = videoRef.current;
    if(!videoPlayed) return
    
    if(isMuted){
        videoPlayed.muted= false;
        setIsMuted(false);
    }else{
        videoPlayed.muted = true;
        setIsMuted(true)
    }
    
}

const closeVideoSec = ()=>{
    setVideoSize(false);

    if(!videoRef.current) return
    videoRef.current.pause();
    videoRef.current.muted = false;
    setIsMuted(false);
    setIsPlay(false);
    videoRef.current.currentTime = 0;
    setProgress(0);
    setHidePlaayButton(false)
    setOnOffvideoControl(false)
    document.body.style.overflow = "auto";
}

const selectedCategory = videoTypeListBtn[currentCatageryBtn];

const filteredVideos =
  selectedCategory === "All categories"
    ? videosData
    : videosData.filter((item) =>
        item.categories.includes(selectedCategory)
      );



  return (
    <>
    
    <div className='project'>


        <div className={ `hidevideoF ${videoSize? "showVideoF" : ""}`}  onClick={closeVideoSec}>
        
            <div className='videoSec' onClick={(e) => {e.stopPropagation(); setOnOffvideoControl(!onOffvideoControl);}} > 
                <video src={currentVideo[0]} poster={currentVideo[1]} ref={videoRef} onTimeUpdate={handleTimeUpdate}  playsInline preload='metadata'   controlsList="nodownload noplaybackrate  nofullscreen" ></video> 
                <button className={`firstPlaybtn ${(hidePlayButton)? "hidePlayBtn" : "showBtnPlay"}`} onClick={playVideo}><HiMiniPlay/></button>
                <div className={`videoControls ${onOffvideoControl? "hideVideoControls" : ""}`} onClick={(e)=> e.stopPropagation()}>
                    <button onClick={playVideo}> {(isPlay)?<FaPause /> : <FaPlay/>}  </button>
                    <div className="progressBar" onClick={handleSeek}>
                        <div className="progressFill"  style={{ width: `${(videoSize)? progress : 0}%` }} />
                    </div>
                    <button onClick={mutedVideo}> {(isMuted)?<ImVolumeMute2 /> : <ImVolumeHigh />} </button>
                </div>
                <div className='tittle'>Rayzmedia</div>

            </div>

            
        </div>



        <h4 className='projectH4'>Video Gallery</h4>
        <p className='projectP1'>Discover professional content across industries
             and formats  from TikTok
             & Reels to YouTube, Podcasts, and Custom VFX
        </p>

        <div className='ProjectVideoTypeBtn'>
            {videoTypeListBtn.map((btn,index) =>{
                return <button className={`${(currentCatageryBtn == index)? "currentCatagerybutton" : ""}`} onClick={()=>{setCurrentCatageryBtn(index)}}>{btn}</button>
            })}
            
        </div>

        <div className='projectVideoBox'>

            {filteredVideos.map((item,index)=>{
                return  (
                  <div className="videoCon" data-aos="fade-up" >
                    <div className='videoTumbnail'  style={{ backgroundImage: `url(${item.thumbnail})` }} >
                      <button className='playButton'  ><div onClick={()=>{document.body.style.overflow = "hidden"; setVideoSize(true); setCurrentVideo([item.video, item.thumbnail])}}><FaPlayCircle /></div></button>
                    </div>
                  </div>
                )
            })}
            
           
            

            
            
        </div>


    </div>
    

    {/* <FollowUs /> */}
    <Testimonial />
    </>
  )
}

export default Projects
import React, { useEffect, useState } from 'react'
import './projects.css'
import FollowUs from '../FollowUs/FollowUs'
import video1 from "../homePageVideo.mp4"
import { FaPlayCircle, FaRegWindowClose } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Testimonial from '../testimonial/Testimonial'
import AOS from "aos";
import "aos/dist/aos.css";


function Projects() {
    const [videoSize, setVideoSize] = useState(false)
    const [currentCatageryBtn, setCurrentCatageryBtn] =useState(0)
    const videoTypeListBtn = ["All categories", "Ads", "Agencies", "Beauty & Fashion", "Business & Marketing","Coaching & Education", "Course Creators","Crowdfunding", "Custom nimtion/VFX", "Creators","Ecommerce", "Entertainment", "Fitness", "Health & Wellness", "Intros", "Lifestyle", "Medical", "Personal Brand", "Podcast", "product Ads", "Production Companies", "Real estate", "Languages", "template-Based Videos", "Text hooks",  "Tiktok & Reel", "Youtube"]
    useEffect(() => {
        AOS.init({duration: 2000,
             once: false,
             offset:0,
            anchorPlacement: 'top-bottom'});
    }, []);

  return (
    <>
    
    <div className='project'>


        <div className={`${videoSize? "ShowVideoF" : "hidevideoF"}`}  onClick={()=>setVideoSize(!videoSize)}>
            
            <video src={videoSize? video1 : ""} controls muted controlsList="nodownload noplaybackrate  nofullscreen" onClick={(e) => e.stopPropagation()} ></video>
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
            
            <div className="videoCon" data-aos="fade-up" >
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon"  data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                    <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon" data-aos="fade-up" >
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon " data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon" data-aos="fade-up">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            
            
        </div>


    </div>
    

    {/* <FollowUs /> */}
    <Testimonial />
    </>
  )
}

export default Projects
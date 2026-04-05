import React, { useState } from 'react'
import './projects.css'
import FollowUs from '../FollowUs/FollowUs'
import video1 from "../homePageVideo.mp4"
import { FaPlayCircle, FaRegWindowClose } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Testimonial from '../testimonial/Testimonial'



function Projects() {
    const [videoSize, setVideoSize] = useState(false)


  return (
    <>
    
    <div className='project'>


        <div className={`${videoSize? "ShowVideoF" : "hidevideoF"}`}  onClick={()=>setVideoSize(!videoSize)}>
            
            <video src={videoSize? video1 : ""} controls muted controlsList="nodownload noplaybackrate  nofullscreen" onClick={(e) => e.stopPropagation()} ></video>
        </div>



        <h4 className='projectH4'>Video Gallery</h4>
        <p className='projectP1'>Discover professional content across industries
             and formats  from TikTok
             & Reels to YouTube, Podcasts, and Custom VFX</p>

        <div className='projectVideoBox'>
            
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                    <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>
            <div className="videoCon ">
                <video className='proVideo' src={video1}  autoPlay muted loop   controlsList="nodownload noplaybackrate  nofullscreen">
                </video>
                <button className='playButton' onClick={()=>setVideoSize(!videoSize)} ><div><FaPlayCircle /></div></button>
            </div>

            <div className="videoCon ">
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
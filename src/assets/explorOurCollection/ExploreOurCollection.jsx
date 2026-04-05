import React from 'react'
import './exploreOurCollection.css'
import videoFile from "../homePageVideo.mp4"
import { Link } from 'react-router-dom'

function ExploreOurCollection() {
  return (
    <>
     <div className='explorCollection'>
      <div className='expCol'>
        <div className='explorCollectionLeft' >
           <h3>Explore our collection of viral projects </h3>
           <p>A curated selection of our top performing 
            viral edits, crafted to capture attention and hook 
            viewers from the very first scroll
           </p>
           <button className='expColLeftBtn'><Link to="/projects" >Browse Projects</Link></button>
        </div>
         <div className='explorCollectionVideo'>
           <div className='video1'><video  autoPlay loop  muted  src={videoFile}></video></div>
          <div className='video2'><video  autoPlay loop  muted  src={videoFile}></video></div>
          <div className='video3'><video  autoPlay loop  muted  src={videoFile}></video></div>
         </div>
         <button className='expColLeftBtn2'>Browse All Projects</button>
      </div>
    </div>

    
    </>
  )
}

export default ExploreOurCollection
import React, { useEffect, useState } from 'react'
import './ourPlan.css'
import videoAi from '../Ai Button.webm'
import { IoCheckmarkOutline, IoCheckmarkSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
function OurPlan() {
    const [currentRate, setCurrentRate] = useState(1)
    const [currentList, setCurrentList] = useState(1)
    const regularItem = ["2–3 business days turnaround*","2 revisions","Dedicated Video Editing Team","p to 2 brands","Up to 2 users","Chat with editor"]
    const proItem = ["1 day turnaround*","Unlimited revisions","Dedicated Video Editing Team","Unlimited brand accounts","Unlimited users","Chat with editor"]
    const customItem = ["All in PRO Plan +","Custom Turnaround","Dedicated Video Editor","Instant Slack Collaboration","Simultaneous requests","24/7 support"]
    const [showWIncluded,setShowWIncluded] = useState(regularItem)

    const monthlyPrice =[850,1950,4499]
    const quartelyPrice =[765,1755,4049]
    const annuallyPrice =[680,1560,3599]
    const [showPlanPrice,setShowPlanPrice] = useState(monthlyPrice)
  return (
    <>
    
    <div  className='ourPlan'>

        <h3>Join Rayzmedia now</h3>
        
        <div className='priceHead'>
            <button className={`${(currentRate ==1)? "CurrentBtnPrice" :""}`} onClick={()=>{setShowPlanPrice(monthlyPrice); setCurrentRate(1)}}>Monthly</button>
            <button className={`${(currentRate ==2)? "CurrentBtnPrice" :""}`} onClick={()=>{setShowPlanPrice(quartelyPrice); setCurrentRate(2)}}><span>save 10%</span>Quarterly</button>
            <button className={`${(currentRate ==3)? "CurrentBtnPrice" :""}`} onClick={()=>{setShowPlanPrice(annuallyPrice); setCurrentRate(3)}}><span>save 20%</span>Annually</button>
        </div>

        <div className='priceSec'>

            <div className='priceSecLeft'>
                <div className={`priceSecleftDiv ${(currentList == 1)? "CurrentBtnList": ""}`} onClick={()=>{setShowWIncluded(regularItem); setCurrentList(1)}}>
                    <div >
                        <h6>Regular</h6>
                        <p>Most popular</p>
                    </div>
                    <p><span>{showPlanPrice[0]}$</span>/m</p>
                </div>

                <div className={`priceSecleftDiv ${(currentList == 2)? "CurrentBtnList": ""}`} onClick={()=>{setShowWIncluded(proItem); setCurrentList(2)}}>
                    <div >
                        <h6>Pro</h6>
                        <p>More feature</p>
                    </div>
                    <p><span>{showPlanPrice[1]}$</span>/m</p>
                </div>

                <div className={`priceSecleftDiv ${(currentList == 3)? "CurrentBtnList": ""}`} onClick={()=>{setShowWIncluded(customItem); setCurrentList(3)}}>
                    <div >
                        <h6>Custom</h6>
                        <p>Advanced clint</p>
                    </div>
                    <p><span>{showPlanPrice[2]}$</span>/m</p>
                </div>
            </div>

            <div className='priceSecRight'>
                 <h6>WHAT'S INCLUDED</h6>
                <div className='DetailSec'>
                    {/* <h6>WHAT'S INCLUDED</h6> */}
                    <div className='items'><p>{showWIncluded[0]}</p><div><IoCheckmarkSharp /></div></div>
                    <div className='items'><p>{showWIncluded[1]}</p><div><IoCheckmarkSharp /></div></div>
                    <div className='items'><p>{showWIncluded[2]}</p><div><IoCheckmarkSharp /></div></div>
                    <div className='items'><p>{showWIncluded[3]}</p><div><IoCheckmarkSharp /></div></div>
                    <div className='items'><p>{showWIncluded[4]}</p><div><IoCheckmarkSharp /></div></div>
                    <div className='items'><p>{showWIncluded[5]}</p><div><IoCheckmarkSharp /></div></div>
                </div>
                <div className='RightBtnSec'>
                    <button onClick={()=>{ document.getElementById("comparePriceTableSection")?.scrollIntoView({ behavior: "smooth" });}}>
                        Compare Plan
                    </button>
                    <button > <Link to="/contact"> Contact us</Link></button>
                </div>
            </div>
        </div>

        <div className='comparePrice'>
            <div id='comparePriceTableSection' className='comparePriceTableSec'>
                <h2 className='headH2'>Compare all plans</h2>
                <p className='headP'>Video editing prices - Rayzmedia.
                     See which is the best price plan for you.
                </p>

                <table>

                    <thead>
                         <tr>
                        <th>Feature</th>
                    
                        <th>
                            <div>
                                <h6>Regular</h6>
                                <h6>850$<span>/m</span></h6>
                            </div>
                        </th>
                        <th>
                            <div>
                                <h6>Pro</h6>
                                <h6>1950$<span>/m</span></h6>
                            </div>
                        </th>
                    </tr>

                    </thead>
                    

                   
                    <tbody>

                    <tr>
                        <td>Short-form {"<"} 90s (per day)  </td>
                        <td>1/day</td>                        
                        <td>multiple</td>
                    </tr>

                    <tr>
                        <td>Long-form {"<"} 10 min</td>
                        <td>up to 2 days</td>                        
                        <td>up to 1 day</td>
                    </tr>

                    <tr>
                        <td>Long-form {"<"} 20 min</td>
                        <td>up to 2 days</td>                        
                        <td>up to 1 day</td>
                    </tr>
                    
                    <tr>
                        <td>Long-form {"<"} 30 min</td>
                        <td>up to 3 days</td>                        
                        <td>up to 2 days</td>
                    </tr>

                    <tr>
                        <td>Long-form {"<"} 60 min</td>
                        <td>up to 4 days</td>                        
                        <td>up to 2 days</td>
                    </tr>

                    <tr>
                        <td>revisions</td>
                        <td>2</td>
                        <td>Unlimited</td>
                    </tr>

                    <tr>
                        <td>Engaging animations & motion graphics </td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Audio enhancement</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Resizing to different platforms</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Stock footage</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Camera LOG/RAW editing</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Color correction & grading </td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Raw footage per order </td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Real-time collaboration (Slack/Discord/Gmeet)</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>

                    <tr>
                        <td>Project Files</td>
                        <td><IoMdClose /></td>
                        <td><IoMdCheckmark /></td>
                    </tr>
                    
                    </tbody>
                   
                </table>
            </div>
            
        </div>

        <div className='ourPlnSolution'>
            <h3>Video Editing Solution</h3>
            <h3>You’ve been looking for</h3>

            <div className='solutionContiner'>

                <div className='solutionChildD gridittem1'>
                    <div><h6>2X</h6></div>
                    <div>
                        <h5>Hassle-Free</h5>
                        <p>No hiring or managing — just results, delivered 2x faster.</p>
                    </div>
                </div>

                <div className='solutionChildD gridittem2'>
                    <div className='seticons'></div>
                    <div>
                        <h5>Cost-Effective</h5>
                        <p>Save up to 30% compared to in-house teams.</p>
                    </div>
                </div>
                

                <div className='solutionChildD gridittem3'>
                    <div className='seticons'></div>
                    <div>
                        <h5>No Commitment</h5>
                        <p>Scale up, down, or pause anytime — 100% flexibility.</p>
                    </div>
                </div>

                <div className='solutionChildD gridittem4'>
                    <video src={videoAi} autoPlay muted loop playsInline preload="metadata" style={{ pointerEvents: "none" }} ></video>
                    {/* <div className='item4Animation0'>
                         <div className='item4Animation1'>
                            <div className='item4Animation2'>
                                <div className='item4Animation3'><h6>AI</h6></div>
                            </div>
                        </div>
                    </div> */}
                    
                    <div>
                        <h5>Expert Editors + AI</h5>
                        <p>Skilled humans using AI for custom B-roll, voiceovers, and effects — quality videos in half the time and cost.</p>
                    </div>
                </div>

                <div className='solutionChildD gridittem5'>
                    <div className='seticons'></div>
                    <div>
                        <h5>Dedicated Team</h5>
                        <p>Ensuring every edit aligns with your goals and vision.</p>
                    </div>
                </div>

                <div className='solutionChildD gridittem6'>
                    <div className='seticons'></div>
                    <div>
                        <h5>Brand-Aligned Content</h5>
                        <p>Videos that truly reflect your identity, increasing brand recall by 40%.</p>
                    </div>
                </div>

            </div>

            <button > <Link to="/contact">Let's Talk!</Link></button>
        </div>
    </div>
    
    </>
  )
}

export default OurPlan
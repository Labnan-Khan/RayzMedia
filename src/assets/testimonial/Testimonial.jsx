import React from 'react'
import './testimonial.css'
import { GoStar } from 'react-icons/go'
import { FaStar } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'

function Testimonial() {
        const comment = [{user:"labnan", com:"nice work"}, {user:"labnan", com:"nice work"},{user:"labnan", com:"nice work"}, {user:"labnan", com:"nice work"},
            {user:"labnan", com:"nice work"},{user:"labnan", com:"nice work"}, {user:"labnan", com:"nice work"},
            {user:"labnan", com:"nice work"},{user:"labnan", com:"nice work"}, {user:"labnan", com:"nice work"},
            {user:"labnan", com:"nice work"},{user:"labnan", com:"nice work"}, {user:"labnan", com:"nice work"},
            {user:"labnan", com:"nice work"},{user:"labnan", com:"nice work"}]




  return (
    

    <>
        <div className='testimonial'>
            <div className='testiUSec'>
                <h4 className='testiUSecH4'> Real Feedback From Real Creators</h4>
                <p className='testiUSecP1'>Proof of quality from editors who use our projects every day.</p>
                <div className='testiBoxSec'>

                  {comment.map((comt,i)=>(
                    <div className='tBox'>
                        <div className='tboxUpside'>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                        </div>
                        <p className='tBoxMP'>
                            {comt.com}
                        </p>
                        <div className='tboxDownSide'>
                            <div><IoMdCheckmark /></div>
                            <p>{comt.user}</p>
                        </div>
                    </div>
                  ))}

                    {comment.map((comt,i)=>(
                    <div className='tBox'>
                        <div className='tboxUpside'>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                        </div>
                        <p className='tBoxMP'>
                            {comt.com}
                        </p>
                        <div className='tboxDownSide'>
                            <div><IoMdCheckmark /></div>
                            <p>{comt.user}</p>
                        </div>
                    </div>
                  ))}

                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial
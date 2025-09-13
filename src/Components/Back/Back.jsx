import React from 'react'
import { assets } from '../../assets/assets'
import './Back.css'

const Back = () => {
  return (
    <div className='BACK'>
       <div className='back'>
                  <h2 className='back-h'>Back Workout Exercises:</h2>
                  <div className='workout-back' >
                      <h4>Pull-ups:</h4>
                      <div className='flex'>
                         <img className='img' src={assets.Pullup1} alt="" /> 
                         <img className='img' src={assets.Pullup2} alt="" />
                         <img className='img' src={assets.Pullup3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Deadlifts:</h4>
                      <div className='flex'>
                          <img className='img' src={assets.Deadlift1} alt="" />
                          <img className='img' src={assets.Deadlift4} alt="" />
                          <img className='img' src={assets.Deadlift3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Lat pulldown: (Wide-grip , Close-grip & Neutral-grip)</h4>
                      <div className='flex'>
                          <img className='img' src={assets.Lat1} alt="" />
                          <img className='img' src={assets.Lat2} alt="" />
                          <img className='img' src={assets.Lat3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Rowing: (Sitted & Bent-Over )</h4>
                      <div className='flex'>
                          <img className='img' src={assets.Rowing1} alt="" />
                          <img className='img' src={assets.Rowing2} alt="" />
                          <img className='img' src={assets.Rowing3} alt="" />
                      </div>
                      
                      <br />
                      <h4>T-bar:</h4>
                      <div className='flex'>
                          <img className='img' src={assets.Tbar1} alt="" />
                          <img className='img' src={assets.Tbar2} alt="" />
                          <img className='img' src={assets.Tbar3} alt="" />
                      </div>
                      
                      <br />
                  </div>
              </div>
    </div>
  )
}

export default Back

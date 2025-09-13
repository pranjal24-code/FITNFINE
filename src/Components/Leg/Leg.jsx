import React from 'react'
import './Leg.css'
import { assets } from '../../assets/assets'

const Leg = () => {
  return (
    <div className='LEG'>
      <div className='leg'>
                  <h2 className='leg-h'>Leg Workut Exercises:</h2>
                  <div className="workout-leg">
                      <h4>Sqauts: (Normal , Sumo , Front and Close)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Squat1} alt="" />
                          <img className='img' src={assets.Squat2} alt="" />
                          <img className='img' src={assets.Squat3} alt="" />
                      </div>
                      <br />
                      <h4>Lunges:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Lunges1} alt="" />
                          <img className='img' src={assets.Lunges2} alt="" />
                          <img className='img' src={assets.Lunges3} alt="" />
                      </div>
                      <br />
      
                      <h4>Leg press:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Leg1} alt="" />
                          <img className='img' src={assets.Leg2} alt="" />
                          <img className='img' src={assets.Leg3} alt="" />
                      </div>
                      <br />
      
                      <h4>Leg-extension:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Extension1} alt="" />
                          <img className='img' src={assets.Extension2} alt="" />
                          <img className='img' src={assets.Extension3} alt="" />
                      </div>
      
                      <br />
      
                      <h4>Leg-Curls:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Curl1} alt="" />
                          <img className='img' src={assets.Curl2} alt="" />
                          <img className='img' src={assets.Curl3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Calfs:</h4>
                      <div className="flex">
                          <img className='img'  src={assets.Calf1} alt="" />
                          <img className='img'  src={assets.Calf2} alt="" />
                          <img className='img'  src={assets.Calf3} alt="" />
                      </div>
                      
      
                  </div>
              </div>
    </div>
  )
}

export default Leg

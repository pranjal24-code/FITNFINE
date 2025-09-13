import React from 'react'
import './Abs.css'
import { assets } from '../../assets/assets'

const Abs = () => {
  return (
    <div className='ABS'>
              <div className="abs">
                  <h2 className='abs-h'>Abs Workout Exercises</h2>
                  <div className="workout-abs">
                      <h4>Crunches:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Crunch1} alt="" />
                          <img className='img' src={assets.Crunch2} alt="" />
                          <img className='img' src={assets.Crunch3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Sides:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Sides1} alt="" />
                          <img className='img' src={assets.Sides2} alt="" />
                          <img className='img' src={assets.Sides3} alt="" />
                      </div>
                      <br />
                      <h4>Leg raises:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Legs1} alt="" />
                          <img className='img' src={assets.Legs2} alt="" />
                          <img className='img' src={assets.Legs3} alt="" />
                      </div>
      
                      <br />
                      <h4>Abs-machine:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Machine1} alt="" />
                          <img className='img' src={assets.Machine2} alt="" />
                          <img className='img' src={assets.Machine3} alt="" />
                      </div>
      
                  </div>
              </div>
    </div>
  )
}

export default Abs

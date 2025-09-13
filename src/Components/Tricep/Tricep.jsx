import React from 'react'
import './Tricep.css'
import { assets } from '../../assets/assets'

const Tricep = () => {
  return (
    <div className='TRICEP'> 
         <div className='triceps'>
                  <h2 className='triceps-h'>Triceps Workout Exercises</h2>
                  <div className="workout-tricep">
                      <h4>Overhead: (Dumbbell & Cable)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Overhead1} alt="" />
                          <img className='img' src={assets.Overhead2} lt="" />
                          <img className='img' src={assets.Overhead3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Pushdown | Reverse Pushdown:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Pushdown1} alt="" />
                          <img className='img' src={assets.Pushdown2} alt="" />
                          <img className='img' src={assets.Pushdown3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Bench dips | Diamond Push-ups:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Dips1} alt="" />
                          <img className='img' src={assets.Dips2} alt="" />
                          <img className='img' src={assets.Dips3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Skull-crusher:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Skull1} alt="" />
                          <img className='img' src={assets.Skull2} alt="" />
                          <img className='img' src={assets.Skull3} alt="" />
                      </div>
                      
                  </div>
              </div>
    </div>
  )
}

export default Tricep
 
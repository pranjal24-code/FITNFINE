import React from 'react'
import './Bicep.css'
import { assets } from '../../assets/assets'

const Bicep = () => {
  return (
    <div className='BICEP'> 
              <div className='bicep'>
                  <h2 className='bicep-h'>Bicep Workout Exercises:</h2>
                  <div className="workout-bicep">
                      <h4>Dumbbell curl: (Normal , Sitted & Incline)</h4>
                          <div className='flex'>
                              <img className='img' src={assets.Bicep1} alt="" />
                              <img className='img' src={assets.Bicep2} alt="" />
                              <img className='img' src={assets.Bicep3} alt="" />
                          </div> 
                      
                      <br />
                      <h4>Hammar curl: (Normal & Sitted) </h4>
                          <div className='flex'>
                              <img className='img' src={assets.Hammer1} alt="" />
                              <img className='img' src={assets.Hammer2} alt="" />
                              <img className='img' src={assets.Hammer3} alt="" />
                          </div>
                      
                      <br />
                      <h4>Reverse curl | Barbell curl: (Normal , Cabel & Zig-zag rod ) </h4>
                      <div className="flex">
                          <img className='img' src={assets.Reverse1} alt="" />
                          <img className='img' src={assets.Reverse2} alt="" />
                          <img className='img' src={assets.Reverse3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Preacher curl: </h4>
                      <div className="flex">
                          <img className='img' src={assets.Preacher1} alt="" />
                          <img className='img' src={assets.Preacher2} alt="" />
                          <img className='img' src={assets.Preacher3} alt="" />
                      </div>
                      
                  </div>
              </div>
    </div>
  )
}

export default Bicep

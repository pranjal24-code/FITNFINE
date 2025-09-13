import React from 'react'
import './Shoulder.css'
import { assets } from '../../assets/assets'

const Shoulder = () => {
  return (
    <div className='SHOULDER'>
              <div className='shoulder'>
                  <h2 className='shoulder-h'>Shoulder Workout Exercises</h2>
                  <div className="workout-shoulder">
                      <h4>Arnold press | Dumbbell press:</h4>
                      <div className="flex">
                          <img className='img' src={assets.Arnold1} alt="" />
                          <img className='img' src={assets.Arnold2} alt="" />
                          <img className='img' src={assets.Arnold3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Side lateral: (Cable , Barbell & Dumbbell)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Lateral1} alt="" />
                          <img className='img' src={assets.Lateral2} alt="" />
                          <img className='img' src={assets.Lateral3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Front raises: (Cabel , Barbell & Dumbbell)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Front1} alt="" />
                          <img className='img' src={assets.Front2} alt="" />
                          <img className='img' src={assets.Front3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Up-right: (Plate & Cabel)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Up1} alt="" />
                          <img className='img' src={assets.Up2} alt="" />
                          <img className='img' src={assets.Up3} alt="" />
                      </div>
                      
                      <br />
                      <h4>Rear-delts: (Face-pull , Dumbbell & Rear pec-deck fly)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Delt1} alt="" />
                          <img className='img' src={assets.Delt2} alt="" />
                          <img className='img' src={assets.Delt3} alt="" />
                      </div>
                      <br />
                      <h4>Shrugs: (Dumbbell & Barbell)</h4>
                      <div className="flex">
                          <img className='img' src={assets.Shrug1} alt="" />
                          <img className='img' src={assets.Shrug2} alt="" />
                          <img className='img' src={assets.Shrug3} alt="" />
                      </div>
      
                  </div>
              </div>
    </div>
  )
}

export default Shoulder

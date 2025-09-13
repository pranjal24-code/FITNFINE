import React from 'react'
import './Exercise.css'
import Back from '../Back/Back'
import Chest from '../Chest/Chest'
import Bicep from '../Bicep/Bicep'
import Tricep from '../Tricep/Tricep'
import Shoulder from '../Shoulder/Shoulder'
import Abs from '../Abs/Abs'
import {Routes , Route } from 'react-router-dom'
// import { assets } from '../../assets/assets'

const Exercise = () => {
  return (
    <div className='main'>

        <Routes>
            <Route path='/chest' element={<Chest/>}/>
            <Route path='/back' element={<Back/>}/>
            <Route path='/shoulder' element={<Shoulder/>}/>
            <Route path='/bicep' element={<Bicep/>}/>
            <Route path='/tricep' element={<Tricep/>}/>
            <Route path='/abs' element={<Abs/>}/>
            <Route path='/leg' element={<Leg/>}/>
        </Routes>

        {/* <div className='chest'>
            <h2 className='chest-h'>Chest Workout Exercises:</h2>
            <div className='workout-chest'>
                <h4>Push-ups:</h4>
                    <div className='flex'>
                        <img className='img' src={assets.GIF} alt="" />
                        <img className='img' src={assets.ONEhand} alt="" />
                        <img className='img' src={assets.Widepushup} alt="" />
                    </div>

                <br />
                <h4>Dumbbell press (Incline , Flat & Decline bench)</h4>
                    <div className='flex'>
                        <img className='img' src={assets.Incline} alt="" />
                        <img className='img' src={assets.Flat} alt="" />
                        <img className='img' src={assets.Deckline} alt="" />

                    </div>

                <br />
                <h4>Barbell press (Incline , Flat & Decline bench)</h4>
                    <div className='flex'>
                        <img className='img' src={assets.Barbell1} alt="" />
                        <img className='img' src={assets.Barbell2} alt="" />
                        <img className='img' src={assets.Barbell3} alt="" />
                    </div>
                
                <br />
                <h4>Cable fly | Pec-deck fly |</h4>
                    <div className='flex'>
                        <img className='img' src={assets.Fly3} alt="" />
                        <img className='img' src={assets.Fly1} alt="" />
                        <img className='img' src={assets.Fly2} alt="" />
                    </div>
                <br />
                <h4>Scoop | Narrow press | Chest-dip</h4>
                <div className='flex'>
                    <img className='img' src={assets.Scoop} alt="" />
                    <img className='img' src={assets.Narrow} alt="" />
                    <img className='img' src={assets.Chestdip} alt="" />
                </div>
                
            </div>
        </div>
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
                <h4>Deadlifts</h4>
                <div className='flex'>
                    <img className='img' src={assets.Deadlift1} alt="" />
                    <img className='img' src={assets.Deadlift4} alt="" />
                    <img className='img' src={assets.Deadlift3} alt="" />
                </div>
                
                <br />
                <h4>Lat pulldown (Wide-grip , Close-grip & Neutral-grip)</h4>
                <div className='flex'>
                    <img className='img' src={assets.Lat1} alt="" />
                    <img className='img' src={assets.Lat2} alt="" />
                    <img className='img' src={assets.Lat3} alt="" />
                </div>
                
                <br />
                <h4>Rowing (Sitted & Bent-Over )</h4>
                <div className='flex'>
                    <img className='img' src={assets.Rowing1} alt="" />
                    <img className='img' src={assets.Rowing2} alt="" />
                    <img className='img' src={assets.Rowing3} alt="" />
                </div>
                
                <br />
                <h4>T-bar</h4>
                <div className='flex'>
                    <img className='img' src={assets.Tbar1} alt="" />
                    <img className='img' src={assets.Tbar2} alt="" />
                    <img className='img' src={assets.Tbar3} alt="" />
                </div>
                
                <br />
            </div>
        </div>

        <div className='leg'>
            <h2 className='leg-h'>Leg Workut Exercises:</h2>
            <div className="workout-leg">
                <h4>Sqauts (Normal , Sumo , Front and Close)</h4>
                <div className="flex">
                    <img className='img' src={assets.Squat1} alt="" />
                    <img className='img' src={assets.Squat2} alt="" />
                    <img className='img' src={assets.Squat3} alt="" />
                </div>
                <br />
                <h4>Lunges</h4>
                <div className="flex">
                    <img className='img' src={assets.Lunges1} alt="" />
                    <img className='img' src={assets.Lunges2} alt="" />
                    <img className='img' src={assets.Lunges3} alt="" />
                </div>
                <br />

                <h4>Leg press</h4>
                <div className="flex">
                    <img className='img' src={assets.Leg1} alt="" />
                    <img className='img' src={assets.Leg2} alt="" />
                    <img className='img' src={assets.Leg3} alt="" />
                </div>
                <br />

                <h4>Leg-extension</h4>
                <div className="flex">
                    <img className='img' src={assets.Extension1} alt="" />
                    <img className='img' src={assets.Extension2} alt="" />
                    <img className='img' src={assets.Extension3} alt="" />
                </div>

                <br />

                <h4>Leg-Curls</h4>
                <div className="flex">
                    <img className='img' src={assets.Curl1} alt="" />
                    <img className='img' src={assets.Curl2} alt="" />
                    <img className='img' src={assets.Curl3} alt="" />
                </div>
                
                <br />
                <h4>Calfs</h4>
                <div className="flex">
                    <img className='img'  src={assets.Calf1} alt="" />
                    <img className='img'  src={assets.Calf2} alt="" />
                    <img className='img'  src={assets.Calf3} alt="" />
                </div>
                

            </div>
        </div>

        <div className='bicep'>
            <h2 className='bicep-h'>Bicep Workout Exercises:</h2>
            <div className="workout-bicep">
                <h4>Dumbbell curl (Normal , Sitted & Incline)</h4>
                    <div className='flex'>
                        <img className='img' src={assets.Bicep1} alt="" />
                        <img className='img' src={assets.Bicep2} alt="" />
                        <img className='img' src={assets.Bicep3} alt="" />
                    </div> 
                
                <br />
                <h4>Hammar curl (Normal & Sitted) </h4>
                    <div className='flex'>
                        <img className='img' src={assets.Hammer1} alt="" />
                        <img className='img' src={assets.Hammer2} alt="" />
                        <img className='img' src={assets.Hammer3} alt="" />
                    </div>
                
                <br />
                <h4>Reverse curl | Barbell curl (Normal , Cabel & Zig-zag rod ) </h4>
                <div className="flex">
                    <img className='img' src={assets.Reverse1} alt="" />
                    <img className='img' src={assets.Reverse2} alt="" />
                    <img className='img' src={assets.Reverse3} alt="" />
                </div>
                
                <br />
                <h4>Preacher curl </h4>
                <div className="flex">
                    <img className='img' src={assets.Preacher1} alt="" />
                    <img className='img' src={assets.Preacher2} alt="" />
                    <img className='img' src={assets.Preacher3} alt="" />
                </div>
                
            </div>
        </div>
      
        <div className='triceps'>
            <h2 className='triceps-h'>Triceps Workout Exercises</h2>
            <div className="workout-tricep">
                <h4>Overhead (Dumbbell & Cable)</h4>
                <div className="flex">
                    <img className='img' src={assets.Overhead1} alt="" />
                    <img className='img' src={assets.Overhead2} lt="" />
                    <img className='img' src={assets.Overhead3} alt="" />
                </div>
                
                <br />
                <h4>Pushdown | Reverse Pushdown</h4>
                <div className="flex">
                    <img className='img' src={assets.Pushdown1} alt="" />
                    <img className='img' src={assets.Pushdown2} alt="" />
                    <img className='img' src={assets.Pushdown3} alt="" />
                </div>
                
                <br />
                <h4>Bench dips | Diamond Push-ups</h4>
                <div className="flex">
                    <img className='img' src={assets.Dips1} alt="" />
                    <img className='img' src={assets.Dips2} alt="" />
                    <img className='img' src={assets.Dips3} alt="" />
                </div>
                
                <br />
                <h4>Skull-crusher</h4>
                <div className="flex">
                    <img className='img' src={assets.Skull1} alt="" />
                    <img className='img' src={assets.Skull2} alt="" />
                    <img className='img' src={assets.Skull3} alt="" />
                </div>
                
            </div>
        </div>

        <div className='shoulder'>
            <h2 className='shoulder-h'>Shoulder Workout Exercises</h2>
            <div className="workout-shoulder">
                <h4>Arnold press | Dumbbell press</h4>
                <div className="flex">
                    <img className='img' src={assets.Arnold1} alt="" />
                    <img className='img' src={assets.Arnold2} alt="" />
                    <img className='img' src={assets.Arnold3} alt="" />
                </div>
                
                <br />
                <h4>Side lateral (Cable , Barbell & Dumbbell)</h4>
                <div className="flex">
                    <img className='img' src={assets.Lateral1} alt="" />
                    <img className='img' src={assets.Lateral2} alt="" />
                    <img className='img' src={assets.Lateral3} alt="" />
                </div>
                
                <br />
                <h4>Front raises (Cabel , Barbell & Dumbbell)</h4>
                <div className="flex">
                    <img className='img' src={assets.Front1} alt="" />
                    <img className='img' src={assets.Front2} alt="" />
                    <img className='img' src={assets.Front3} alt="" />
                </div>
                
                <br />
                <h4>Up-right (Plate & Cabel)</h4>
                <div className="flex">
                    <img className='img' src={assets.Up1} alt="" />
                    <img className='img' src={assets.Up2} alt="" />
                    <img className='img' src={assets.Up3} alt="" />
                </div>
                
                <br />
                <h4>Rear-delts (Face-pull , Dumbbell & Rear pec-deck fly)</h4>
                <div className="flex">
                    <img className='img' src={assets.Delt1} alt="" />
                    <img className='img' src={assets.Delt2} alt="" />
                    <img className='img' src={assets.Delt3} alt="" />
                </div>
                <br />
                <h4>Shrugs (Dumbbell & Barbell)</h4>
                <div className="flex">
                    <img className='img' src={assets.Shrug1} alt="" />
                    <img className='img' src={assets.Shrug2} alt="" />
                    <img className='img' src={assets.Shrug3} alt="" />
                </div>

            </div>
        </div>
        
        <div className="abs">
            <h2 className='abs-h'>Abs Workout Exercises</h2>
            <div className="workout-abs">
                <h4>Crunches</h4>
                <div className="flex">
                    <img className='img' src={assets.Crunch1} alt="" />
                    <img className='img' src={assets.Crunch2} alt="" />
                    <img className='img' src={assets.Crunch3} alt="" />
                </div>
                
                <br />
                <h4>Sides</h4>
                <div className="flex">
                    <img className='img' src={assets.Sides1} alt="" />
                    <img className='img' src={assets.Sides2} alt="" />
                    <img className='img' src={assets.Sides3} alt="" />
                </div>
                <br />
                <h4>Leg raises</h4>
                <div className="flex">
                    <img className='img' src={assets.Legs1} alt="" />
                    <img className='img' src={assets.Legs2} alt="" />
                    <img className='img' src={assets.Legs3} alt="" />
                </div>

                <br />
                <h4>Abs-machine</h4>
                <div className="flex">
                    <img className='img' src={assets.Machine1} alt="" />
                    <img className='img' src={assets.Machine2} alt="" />
                    <img className='img' src={assets.Machine3} alt="" />
                </div>

            </div>
        </div> */}
    </div>
  )
}

export default Exercise

import React from 'react'
import './Chest.css'
import { assets } from '../../assets/assets'

const Chest = () => {
  return (
    <div className='CHEST'>
            <div className='chest'>
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

    </div>        
  )
}

export default Chest

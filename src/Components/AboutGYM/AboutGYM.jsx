import React from 'react'
import './AboutGYM.css'
import { assets } from '../../assets/assets'

const AboutGYM = () => {
  return (
    <div className='container'>
      <div className='main'>
        <h1>Welcome to Our GYM</h1>
      </div>
      <div className='middle'>
        <h1>Indore's no.1 GYM with largest GYM area </h1>
        <h2>Carpet area - 6000Sq.feet</h2>
        <h2>Certified Trainers </h2>
        <h2>Competition Posing</h2>
        <h2>Men Physique</h2>
        <h2>12 Week Transformation</h2>
      </div>
      <div className='bottom'>
        <p className='p0'>We have a single cardio area that includes all the cardio machines </p>
        <p className='p1'>Steam bath , men/female changing room , Zumba and crossfit classes </p>
      </div>
      <div className='sponser'>
        <h1>Sponsored by: </h1>
            <div className='image'>
                <img src={assets.Puma} alt="logo" />
                <img src={assets.Nike} alt="logo" />
                <img src={assets.Adidas} alt="logo" />
                <img src={assets.Reebok} alt="logo" />
                <img src={assets.UnderArmour} alt="logo" />
            </div>
        
      </div>
    </div>
  )
}

export default AboutGYM

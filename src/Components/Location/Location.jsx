import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div id='color'>
        <h1 className='LC'>Location of FIT N FINE gym</h1>
      <address className='address'>
        7-A, 3rd Floor, Geeta Bhawan Rd Square near Ratlam Kothi,
        <br />
        <br />

        Indore, Madhya Pradesh 452001
        </address>
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.276555717865!2d75.88138177530483!3d22.717959979388375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0x70ab944c1b9c62b8!2sFit%20N%20Fine%20Health%20Club!5e0!3m2!1sen!2sin!4v1752862838467!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
    </div>
  )
}

export default Location


// import './HomeDisplay.css'
import './Fake.css'
import { assets } from '../../assets/assets'
// import { Routes ,Route, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AboutGYM from '../AboutGYM/AboutGYM'
import { useEffect } from 'react'




const HomeDisplay = () => {

  const slides = [
    { id: 1, img: assets.Abhishek, alt: "Abhishek" },
    { id: 2, img: assets.Ayush, alt: "Ayush" },
    { id: 3, img: assets.Shubham, alt: "Shubham" },
    { id: 4, img: assets.Bhushan, alt: "Bhushan" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Manual navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  
   

const navigate = useNavigate()  

const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
    <div className='top-bar'>
      <div className='detail' >
        <span id='num'>+91 4545454545 | Customer.care@fitnfine.in </span>
      </div>
      <div>
        <h3 id='wel'>Welcome to FIT N FINE GYM</h3>
      </div>

      <div id='lg'>

        <a href="https://www.instagram.com/fitnfinebynsp/?hl=en">
          <img id='logos' src={assets.IG} alt="" />
        </a>

        <a href="">
          <img id='logos' src={assets.Facebook} alt="" />
        </a>
          
        <a href="">
          <img id='logos' src={assets.Youtube} alt="" />
        </a>

        <a href="">
          <img id='logos' src={assets.Twitter}  alt="" />
        </a>
      </div>
    </div>

    
    <div className='navBar'>
      <div className='about'>
        <h1 className='H1'>FIT</h1>
        <h1 className='H3' >N</h1>
        <h1 className='H2'>FINE</h1>
      </div>
      <div className='lists'>
        <ul className='list'>
          <li onClick={() => navigate('/cbr')} id='menu1'>Contact us</li>
            {/* <li>Diet Plan</li> */}
          <li onClick={()=> navigate('/location')} id='menu2'>Location</li>
          <li id='menu3' onClick={()=> navigate('/aboutgym')}>About GYM</li>
              <li id='menu4'onClick={toggleText} style={{ cursor: 'pointer' }} >Exercise
            {isVisible && (
              <div className="exercise-list">
                <div onClick={()=> navigate('/chest')} className="work1">Chest</div>
                <div onClick={()=> navigate('/back')} className="work2">Back</div>
                <div onClick={()=> navigate('/shoulder')} className="work3">Shoulder</div>
                <div onClick={()=> navigate('/bicep')} className="work4">Bicep</div>
                <div onClick={()=> navigate('/tricep')} className="work5">Tricep</div>
                <div onClick={()=> navigate('/leg')} className="work6">Leg</div>
                <div onClick={()=> navigate('/abs')} className="work7">Abs</div>
              </div>
            )}
            </li>
          <li onClick={()=> navigate('/trainers')} id='menu5'>Trainers</li>
        </ul>
      </div>
      <div id='on'>
        <button onClick={()=> navigate('./join')} id='JJ'>Join now</button>
      </div>
      <div id='on'>
        <button onClick={()=> navigate('./Online')} id='JJ1'>Online Session</button>
      </div>
    </div>
  
  {/* <section className='container'>
            <div className="slide-wrapper">
              <div className="slider">
                <img id='#1' src={assets.Abhishek} alt="" />
                <img id='#2' src={assets.Ayush} alt="" />
                <img id='#3' src={assets.Shubham} alt="" />
                <img id='#4' src={assets.Bhushan} alt="" /> 
              </div>
              <div className="slider-nav">
                <a href="#slider-1"></a>
                <a href="#slider-2"></a>
                <a href="#slider-3"></a>
                <a href="#slider-4"></a>
              </div>
            </div>
  </section> */}


  <section className="slider-container">
      <div className="slider-wrapper">
        {/* Slides */}
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.img}
              alt={slide.alt}
              className="slide-image"
            />
          ))}
        </div>

        {/* Left arrow */}
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        {/* Right arrow */}
        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Navigation dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>


    
    <div className='middle'>
      <h3 className='m-context'>Join the Fit n Fine GYM</h3>
      <h3 className='m-context1'>To build your physique like</h3>

      <div className='membership'>
        <h3 className='MEME'>Explore membership:</h3>
        <div className='prices'>
          <ul className='price'>
            <li><b>Monthly</b>-₹3000</li>
            <li><b>Quaterly</b>-₹7000</li>
            <li><b>Yearly</b>-₹15000</li>
            <li><b>12 week Transformation</b>-₹40000</li>
          </ul>
        </div>
      </div>
      </div>

      <div className='hero'>
        <div className='content'>
          <h1>12 Week Transformations</h1>
          <div className='trans-image'>
            {/* <img className='sk' src={assets.skinny} alt="" />
            <p>To</p>
            <img className='sk' src={assets.body} alt="" /> */}
            <img id='trans' src={assets.week} alt="" />
            {/* <img src={assets.skinny} alt="" />
            <p>To</p>
            <img src={assets.body} alt="" /> */}
          </div>

        </div>
      </div>


      <div className='Exp'> 
        <h1 id='exploregym'>Our Gym Tour</h1>

        <div className='video'>

          <video id='vd' controls>
          <source src={assets.GYMVD} type='video/mp4' />
        </video>
        </div>
        
      </div>

    <div className='Programs'>
      <div className='first'>
        <h1>Our Programs:</h1>
        <p className='p2'>The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.</p>
      </div>

      <div className='second'>
        <div className='left1'>
              <img id='Sales' src={assets.Sales} alt="" />
        </div>

        <div className='right1'>
              <h3>Corporate Membership;</h3>
              <p className='p2'>Don’t have time to go to the gym? We get the gym to you. Fit N Fine Gym Indore offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.</p>
        </div>
      </div> 


      <div className='third'>
        <div className="left2">
              <h4>Personal Training:</h4>
              <p className='p2'>Fit N Fine Gym Indore is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them.</p>
        </div>

        <div className="right2">
              <img id='Training' src={assets.Training} alt="" />
        </div>
      </div> 


      <div className="fourth">
          <div className="left3">
              <img id='Zumba' src={assets.Zumba} alt="" />
          </div>

          <div className="right3">
                <h4>Group Program:</h4>
                <p className='p2'>Fit N Fine Gym Indore provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.</p>
          </div>
      </div>  
    </div>

    <div className='bt'>
      <div className='og'>
        <h1 className='mem'>Member's Corner</h1>
      </div>
      
    <div className='cd'>
  
      <div className='card'>
          <p className='we'>
            I recently joined the gym and I have a been liking it so far. Trainers are good, they guide u well, the ambiance is motivating. It’s a top gym overall. If you are looking for top quality gym near Lajpat, east of kailash etc. I think you can definitely go for it.
          </p>
      
        <h2 className='pc'>PRANJAL CHAWDA</h2>
        <span className='idr'>Member-FIT N FINE , INDORE</span>
      </div>

      <div className='card'>
          <p className='we'>
            I recently joined the gym and I have a been liking it so far. Trainers are good, they guide u well, the ambiance is motivating. It’s a top gym overall. If you are looking for top quality gym near Lajpat, east of kailash etc. I think you can definitely go for it.
          </p>
      
        <h2 className='pc'>PRANJAL CHAWDA</h2>
        <span className='idr'>Member-FIT N FINE , INDORE</span>
      </div>

            <div className='card'>
          <p className='we'>
            I recently joined the gym and I have a been liking it so far. Trainers are good, they guide u well, the ambiance is motivating. It’s a top gym overall. If you are looking for top quality gym near Lajpat, east of kailash etc. I think you can definitely go for it.
          </p>
      
        <h2 className='pc'>PRANJAL CHAWDA</h2>
        <span className='idr'>Member-FIT N FINE , INDORE</span>
      </div>

    </div>
      
    </div>


    <div className="feedback">
      <div id='context'>
        <h2>FREE FITNESS TIPS</h2>
        <p>Get a weekly dose of fitness directly into your mailbox.</p>
      </div>

      <div id='mail-box'>
          <input id='email' type="text" placeholder='Your email' />
          <input id='e-enter' type="submit" value="submit" />
      </div>
    </div>

    
      <div className="footer">
        <div className='copyright'>
          <span id='cpyr'>© 2002 Fit N Fine Pvt. Ltd. All Rights Reserved.</span>
          <div id='social-media'>

            <a href="https://www.instagram.com/fitnfinebynsp/?hl=en">
              <img id='logo' src={assets.IG} alt="" />
            </a>
              
            <a href="">
              <img id='logo' src={assets.Facebook} alt="" />
            </a>

            <a href="">
              <img id='logo' src={assets.Twitter} alt="" />
            </a>
              
              <a href="">
                <img id='logo' src={assets.Youtube} alt="" />
              </a>
              
          </div>
        </div>
      </div>
    </>
  )


}

export default HomeDisplay 
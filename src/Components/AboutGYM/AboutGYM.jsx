// import React from 'react'
// import './AboutGYM.css'
// import { assets } from '../../assets/assets'

// const AboutGYM = () => {
//   return (
//     <div className='container'>
//       <div className='main'>
//         <h1>Welcome to Our GYM</h1>
//       </div>
//       <div className='middle'>
//         <h1>Indore's no.1 GYM with largest GYM area </h1>
//         <h2>Carpet area - 6000Sq.feet</h2>
//         <h2>Certified Trainers </h2>
//         <h2>Competition Posing</h2>
//         <h2>Men Physique</h2>
//         <h2>12 Week Transformation</h2>
//       </div>
//       <div className='bottom'>
//         <p className='p0'>We have a single cardio area that includes all the cardio machines </p>
//         <p className='p1'>Steam bath , men/female changing room , Zumba and crossfit classes </p>
//       </div>
//       <div className='sponser'>
//         <h1>Sponsored by: </h1>
//             <div className='image'>
//                 <img src={assets.Puma} alt="logo" />
//                 <img src={assets.Nike} alt="logo" />
//                 <img src={assets.Adidas} alt="logo" />
//                 <img src={assets.Reebok} alt="logo" />
//                 <img src={assets.UnderArmour} alt="logo" />
//             </div>
        
//       </div>
//     </div>
//   )
// }

// export default AboutGYM

// import React from 'react';
// import './AboutGYM.css';
// import { assets } from '../../assets/assets';
// import { FaDumbbell, FaUserCheck, FaRunning, FaUsers } from 'react-icons/fa';

// const AboutGYM = () => {
//   const features = [
//     { icon: <FaUserCheck />, text: "Certified Trainers with years of experience" },
//     { icon: <FaDumbbell />, text: "Competition Posing & Strength Training" },
//     { icon: <FaRunning />, text: "Men Physique & Functional Fitness Programs" },
//     { icon: <FaUsers />, text: "12 Week Transformation Programs with personalized coaching" }
//   ];

//   const amenities = [
//     "Spacious cardio area with latest machines",
//     "Steam bath, sauna & modern changing rooms",
//     "Group classes: Zumba, Crossfit, Yoga, HIIT",
//     "Nutrition consultation & diet plans"
//   ];

//   const sponsors = [assets.Puma, assets.Nike, assets.Adidas, assets.Reebok, assets.UnderArmour];

//   return (
//     <section className='about-gym-container'>
//       {/* Hero Section */}
//       <header className='about-gym-hero'>
//         <h1>Welcome to Our GYM</h1>
//         <p>Indore's No.1 GYM with the Largest Area</p>
//         <span className='gym-area'>Carpet area: 6000 Sq. Feet</span>
//       </header>

//       {/* Gym Story Section */}
//       <section className='about-gym-story'>
//         <h2>Our Journey</h2>
//         <p>
//           Established in 2010, our gym has been a pioneer in helping fitness enthusiasts achieve their 
//           health goals. With a focus on holistic fitness, we combine modern equipment, certified trainers, 
//           and personalized programs to deliver transformative results.
//         </p>
//         <p>
//           Our philosophy is simple: “Fitness is not a destination, it’s a lifestyle.” We aim to create a 
//           welcoming environment where every member feels motivated, supported, and challenged.
//         </p>
//       </section>

//       {/* Features Section */}
//       <section className='about-gym-features'>
//         {features.map((feature, index) => (
//           <div key={index} className='feature-card'>
//             <div className='icon'>{feature.icon}</div>
//             <p>{feature.text}</p>
//           </div>
//         ))}
//       </section>

//       {/* Amenities Section */}
//       <section className='about-gym-amenities'>
//         <h2>Our Amenities</h2>
//         <div className='amenities-list'>
//           {amenities.map((item, index) => (
//             <div key={index} className='amenity-card'>{item}</div>
//           ))}
//         </div>
//       </section>

//       {/* Client Benefits Section */}
//       <section className='about-gym-benefits'>
//         <h2>Why Choose Us?</h2>
//         <ul>
//           <li>Customized workout plans for every fitness level</li>
//           <li>Progress tracking and regular assessments</li>
//           <li>Motivating community of like-minded fitness enthusiasts</li>
//           <li>State-of-the-art equipment and modern facilities</li>
//         </ul>
//       </section>

//       {/* Sponsors Section */}
//       <section className='about-gym-sponsors'>
//         <h2>Our Trusted Sponsors</h2>
//         <div className='sponsors-logos'>
//           {sponsors.map((logo, index) => (
//             <img key={index} src={logo} alt={`Sponsor ${index + 1}`} />
//           ))}
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className='about-gym-cta'>
//         <h2>Join Us Today!</h2>
//         <p>Start your fitness journey with Indore's top gym. Become part of our growing community and transform your life.</p>
//         <button className='cta-button'>Get Started</button>
//       </section>
//     </section>
//   );
// };

// export default AboutGYM;




import React, { useEffect, useState } from 'react';
import './AboutGYM.css';
import { assets } from '../../assets/assets';
import { FaDumbbell, FaUserCheck, FaRunning, FaUsers } from 'react-icons/fa';

const AboutGYM = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/about')
      .then(res => {
        setAboutData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("About API error:", err);
        setLoading(false);
      });
  }, []);

  const features = [
    { icon: <FaUserCheck />, text: "Certified Trainers with years of experience" },
    { icon: <FaDumbbell />, text: "Competition Posing & Strength Training" },
    { icon: <FaRunning />, text: "Men Physique & Functional Fitness Programs" },
    { icon: <FaUsers />, text: "12 Week Transformation Programs with personalized coaching" }
  ];

  const amenities = [
    "Spacious cardio area with latest machines",
    "Steam bath, sauna & modern changing rooms",
    "Group classes: Zumba, Crossfit, Yoga, HIIT",
    "Nutrition consultation & diet plans"
  ];

  const sponsors = [
    assets.Puma,
    assets.Nike,
    assets.Adidas,
    assets.Reebok,
    assets.UnderArmour
  ];

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  return (
    <section className='about-gym-container'>

      {/* Hero Section */}
      <header className='about-gym-hero'>
        <h1>{aboutData?.title || "Welcome to Our GYM"}</h1>
        <p>{aboutData?.subtitle || "Indore's No.1 GYM with the Largest Area"}</p>
        <span className='gym-area'>
          Carpet area: {aboutData?.area || "6000 Sq. Feet"}
        </span>
      </header>

      {/* Gym Story Section */}
      <section className='about-gym-story'>
        <h2>Our Journey</h2>
        <p>
          {aboutData?.journey1 ||
            "Established in 2010, our gym has been a pioneer in helping fitness enthusiasts achieve their health goals."}
        </p>
        <p>
          {aboutData?.journey2 ||
            "Fitness is not a destination, it’s a lifestyle. We provide a motivating and supportive environment."}
        </p>
      </section>

      {/* Features Section */}
      <section className='about-gym-features'>
        {features.map((feature, index) => (
          <div key={index} className='feature-card'>
            <div className='icon'>{feature.icon}</div>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

      {/* Amenities Section */}
      <section className='about-gym-amenities'>
        <h2>Our Amenities</h2>
        <div className='amenities-list'>
          {amenities.map((item, index) => (
            <div key={index} className='amenity-card'>{item}</div>
          ))}
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className='about-gym-benefits'>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Customized workout plans for every fitness level</li>
          <li>Progress tracking and regular assessments</li>
          <li>Motivating community of fitness enthusiasts</li>
          <li>State-of-the-art equipment and modern facilities</li>
        </ul>
      </section>

      {/* Sponsors Section */}
      <section className='about-gym-sponsors'>
        <h2>Our Trusted Sponsors</h2>
        <div className='sponsors-logos'>
          {sponsors.map((logo, index) => (
            <img key={index} src={logo} alt={`Sponsor ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='about-gym-cta'>
        <h2>Join Us Today!</h2>
        <p>
          Start your fitness journey with Indore's top gym. Become part of our growing community and transform your life.
        </p>
        <button className='cta-button'>Get Started</button>
      </section>

    </section>
  );
};

export default AboutGYM;


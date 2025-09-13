import React from 'react'
import { motion } from "framer-motion";
import './joinpage.css'

const Joinpage = () => {
  return (
    <div className="join-page">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="join-title"
      >
        Join Fit N Fine Gym
      </motion.h2>

      <p className="join-subtext">
        Start your fitness journey today! Fill out the form below to register and our team will contact you with further details.
      </p>

      {/* Form */}
      <div className="join-card">
        <div className="join-card-content">
          <input type="text" placeholder="Full Name" className="join-input" />
          <input type="email" placeholder="Email Address" className="join-input" />
          <input type="tel" placeholder="Phone Number" className="join-input" />

          <select className="join-select">
            <option>Select Membership Plan</option>
            <option>Monthly - ₹3000</option>
            <option>Quarterly - ₹7000</option>
            <option>Half-Yearly - ₹10000</option>
            <option>Yearly - ₹15000</option>
          </select>

          <button className="join-button">Submit Application</button>
        </div>
      </div>

      {/* Contact Note */}
      <p className="join-contact">
        For any queries, reach us at <span>+91 4545454545</span> or email <span>customer.care@fitnfine.in</span>
      </p>
    </div>
  );
}

export default Joinpage

import React from 'react'
import { motion } from "framer-motion";
import './cont.css'

const Cont = () => {
  return (
    <div className="contact-page">

      {/* Contact Section */}
      <section className="contact">
        <h2>
          Get in <span>Touch</span>
        </h2>
        <p className="subtitle">
          Have questions? We’d love to hear from you.
        </p>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <p>📍 Address: MG Road, Nagpur, India</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📧 Email: fitnfine@gym.com</p>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          > 
            
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default Cont

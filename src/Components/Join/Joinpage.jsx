// import React from 'react'
// import { motion } from "framer-motion";
// import './joinpage.css'

// const Joinpage = () => {
//   return (
//     <div className="join-page">
//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="join-title"
//       >
//         Join Fit N Fine Gym
//       </motion.h2>

//       <p className="join-subtext">
//         Start your fitness journey today! Fill out the form below to register and our team will contact you with further details.
//       </p>

//       {/* Form */}
//       <div className="join-card">
//         <div className="join-card-content">
//           <input type="text" placeholder="Full Name" className="join-input" />
//           <input type="email" placeholder="Email Address" className="join-input" />
//           <input type="tel" placeholder="Phone Number" className="join-input" />

//           <select className="join-select">
//             <option>Select Membership Plan</option>
//             <option>Monthly - ₹3000</option>
//             <option>Quarterly - ₹7000</option>
//             <option>Half-Yearly - ₹10000</option>
//             <option>Yearly - ₹15000</option>
//           </select>

//           <button className="join-button">Submit Application</button>
//         </div>
//       </div>

//       {/* Contact Note */}
//       <p className="join-contact">
//         For any queries, reach us at <span>+91 4545454545</span> or email <span>customer.care@fitnfine.in</span>
//       </p>
//     </div>
//   );
// }

// export default Joinpage


import React, { useState } from "react";
import { motion } from "framer-motion";
import "./joinpage.css";
import JoinService from "../Services/JoinServies";

const Joinpage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    plan: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit ✅ (ONLY ONE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone || !formData.plan) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await JoinService.createJoinRequest(formData);


      alert(res.message || "Joined successfully!");

      // Clear form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        plan: "",
      });
    } catch (error) {
      console.error("Join Error:", error);
      alert("Failed to submit join request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="join-page">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="join-title"
      >
        Join Fit N Fine Gym
      </motion.h2>

      <p className="join-subtext">
        Start your fitness journey today! Fill out the form below and our team will contact you.
      </p>

      <form className="join-card" onSubmit={handleSubmit}>
        <div className="join-card-content">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            className="join-input"
            value={formData.full_name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="join-input"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="join-input"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="plan"
            className="join-select"
            value={formData.plan}
            onChange={handleChange}
          >
            <option value="">Select Membership Plan</option>
            <option value="Monthly - ₹3000">Monthly - ₹3000</option>
            <option value="Quarterly - ₹7000">Quarterly - ₹7000</option>
            <option value="Half-Yearly - ₹10000">Half-Yearly - ₹10000</option>
            <option value="Yearly - ₹15000">Yearly - ₹15000</option>
          </select>

          <button className="join-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>

      <p className="join-contact">
        For any queries, reach us at <span>+91 4545454545</span> or email{" "}
        <span>customer.care@fitnfine.in</span>
      </p>
    </div>
  );
};

export default Joinpage;


import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8085/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`❌ ${data.error || 'Something went wrong'}`);
      }
    } catch (err) {
      setStatus('❌ Server error. Please try again later.');
    }
  };

  return (
    <div className='us'>
      <div id='Heading'>
        <h1 className='ID1'>Contact Us</h1>
      </div>

      <form onSubmit={handleSubmit} className='Content'>
        <label id='t1' htmlFor="name">Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className='ipp'
          type="text"
          placeholder="Enter your name"
        />

        <label id='t1' htmlFor="email">Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='ipp'
          type="email"
          placeholder = "Enter Your Mail"
        />

        <label id='t1' htmlFor="message">Message:</label>
        <input
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className='ipp'
          type="text"
          placeholder='Message here'
        />

        <div className='message-btn'>
          <button type="submit">Send Message</button>
        </div>
      </form>

      {status && <div><h2 className='ID2'>{status}</h2></div>}
    </div>
  )
}

export default Contact;


import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❌ Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/contact", formData);

      setStatus(res.data.message || "✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact Error:", error);
      setStatus("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="us">
      <div id="Heading">
        <h1 className="ID1">Contact Us</h1>
      </div>

      <form onSubmit={handleSubmit} className="Content">
        <label id="t1">Name:</label>
        <input
          type="text"
          name="name"
          className="ipp"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label id="t1">Email:</label>
        <input
          type="email"
          name="email"
          className="ipp"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label id="t1">Message:</label>
        <input
          type="text"
          name="message"
          className="ipp"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="message-btn">
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {status && <h2 className="ID2">{status}</h2>}
    </div>
  );
};

export default Contact;

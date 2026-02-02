import React, { useState } from "react";
import api from "../../api"; // axios instance
import "./OnlineSession.css";

export default function OnlineSession() {
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    session: "",
    memberId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload for backend
    const payload = {
      full_name: isMember ? "Existing Member" : formData.name,
      email: isMember ? formData.memberId : formData.email,
      phone: "",
      session: formData.session,
    };

    if (!payload.session) {
      alert("Please select a session");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/online-session", payload);

      alert(res.data.message || "Session booked successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        session: "",
        memberId: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to book session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="session-page">
      {/* Hero Section */}
      <section className="session-hero">
        <h1>
          Join Our <span>Online Sessions</span>
        </h1>
        <p>Train with our expert coaches from the comfort of your home.</p>
        <a href="#booking">
          <button className="book-btn">Book Your Session</button>
        </a>
      </section>

      {/* Upcoming Sessions */}
      <section className="upcoming-sessions">
        <h2>Upcoming Live Workouts</h2>
        <div className="sessions-grid">
          <div className="session-card">
            <h3>HIIT Blast</h3>
            <p>Monday, 7:00 AM</p>
          </div>
          <div className="session-card">
            <h3>Strength Training</h3>
            <p>Wednesday, 6:00 PM</p>
          </div>
          <div className="session-card">
            <h3>Zumba Dance</h3>
            <p>Friday, 5:00 PM</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-form" id="booking">
        <h2>Book Your Session</h2>

        <div className="member-toggle">
          <label>
            <input
              type="checkbox"
              checked={isMember}
              onChange={() => setIsMember(!isMember)}
            />
            Already a member?
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          {isMember ? (
            <input
              type="text"
              name="memberId"
              placeholder="Enter Email or Phone"
              value={formData.memberId}
              onChange={handleChange}
              required
            />
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </>
          )}

          <select
            name="session"
            value={formData.session}
            onChange={handleChange}
            required
          >
            <option value="">Select Session</option>
            <option value="HIIT Blast - Monday 7AM">
              HIIT Blast - Monday 7AM
            </option>
            <option value="Strength Training - Wednesday 6PM">
              Strength Training - Wednesday 6PM
            </option>
            <option value="Zumba Dance - Friday 5PM">
              Zumba Dance - Friday 5PM
            </option>
          </select>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </section>

      {/* Recorded Sessions */}
      <section className="recorded-sessions">
        <h2>Watch Recorded Sessions</h2>
        <div className="video-list">
          <iframe
            src="https://www.youtube.com/embed/UBMk30rjy0o"
            title="Workout 1"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/ml6cT4AZdqI"
            title="Workout 2"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

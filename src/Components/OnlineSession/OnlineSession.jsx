import React, { useState } from "react";


export default function OnlineSession() {
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    session: "",
    memberIdentifier: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {};

    // ✅ Existing member
    if (isMember) {
      if (!formData.memberIdentifier || !formData.session) {
        alert("Please fill all fields");
        return;
      }

      payload = {
        full_name: "Existing Member",
        email: formData.memberIdentifier, // email or phone
        session: formData.session,
      };
    }
    // ✅ New member
    else {
      if (!formData.full_name || !formData.email || !formData.session) {
        alert("Please fill all fields");
        return;
      }

      payload = {
        full_name: formData.full_name,
        email: formData.email,
        session: formData.session,
      };
    }

    try {
      setLoading(true);

      const res = await api.post("/session", payload);

      alert(res.data.message || "Session booked successfully!");

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        session: "",
        memberIdentifier: "",
      });
    } catch (error) {
      console.error("Online Session Error:", error);
      alert("Failed to book session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="session-page">
      {/* Hero */}
      <section className="session-hero">
        <h1>
          Join Our <span>Online Sessions</span>
        </h1>
        <p>Train with expert coaches from home.</p>
        <a href="#booking">
          <button className="book-btn">Book Your Session</button>
        </a>
      </section>

      {/* Booking */}
      <section className="booking-form" id="booking">
        <h2>Book Your Session</h2>

        <label className="member-toggle">
          <input
            type="checkbox"
            checked={isMember}
            onChange={() => setIsMember(!isMember)}
          />
          Already a member?
        </label>

        <form onSubmit={handleSubmit}>
          {isMember ? (
            <input
              type="text"
              name="memberIdentifier"
              placeholder="Enter Email or Phone"
              value={formData.memberIdentifier}
              onChange={handleChange}
              required
            />
          ) : (
            <>
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
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

          <button type="submit" disabled={loading} className="submit-btn">
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
          />
          <iframe
            src="https://www.youtube.com/embed/ml6cT4AZdqI"
            title="Workout 2"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}


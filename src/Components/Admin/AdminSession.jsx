import React, { useEffect, useState } from "react";
import api from "../../api";
import './AdminSession.css'

const AdminSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    api.get("/admin/online-sessions")
      .then(res => setSessions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin – Online Sessions</h2>

      {sessions.map((s) => (
        <div key={s.ID} className="session-card">
          <p><strong>Name:</strong> {s.full_name}</p>
          <p><strong>Email:</strong> {s.email}</p>
          <p><strong>Session:</strong> {s.session}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminSessions;

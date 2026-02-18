import React, { useEffect, useState } from "react";
import api from "../../api";
import "./AdminJoin.css";

const AdminJoin = () => {
  const [joins, setJoins] = useState([]);

  useEffect(() => {
    api.get("/admin/join-requests")
      .then(res => setJoins(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin – Join Requests</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          {joins.map((j) => (
            <tr key={j.ID}>
              <td>{j.full_name}</td>
              <td>{j.email}</td>
              <td>{j.phone}</td>
              <td>{j.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJoin;

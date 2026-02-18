import React, { useEffect, useState } from "react";
import api from "../../api";
import "./AdminContact.css";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/admin/contacts")
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin – Contact Messages</h2>

      {contacts.map((c) => (
        <div key={c.ID} className="contact-card">
          <p><strong>Name:</strong> {c.name}</p>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Message:</strong> {c.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminContact;

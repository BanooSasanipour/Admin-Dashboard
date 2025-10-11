import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


import "./NewUser.css";

export default function NewUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    status: "",
    transaction: "",
    avatar: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "userRows"), {
        username: formData.username,
        email: formData.email,
        status: formData.status,
        transaction: parseFloat(formData.transaction),
        avatar: formData.avatar || "https://via.placeholder.com/40",
      });

      alert("✅ User added successfully!");
      setFormData({
        username: "",
        email: "",
        status: "",
        transaction: "",
        avatar: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      alert("❌ Failed to add user.");
    }
  };

  return (
    <div className="newUserWraper">
      <h2 className="newUserTitle"><PersonAddAltIcon style={{marginRight: "10px"}} />Add New User</h2>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Status</label>
        <input
          type="text"
          name="status"
          placeholder="Enter status"
          value={formData.status}
          onChange={handleChange}
        />

        <label>Transaction</label>
        <input
          type="number"
          name="transaction"
          placeholder="Enter transaction amount"
          value={formData.transaction}
          onChange={handleChange}
        />

        <label>Avatar URL</label>
        <input
          type="text"
          name="avatar"
          placeholder="Optional photo URL"
          value={formData.avatar}
          onChange={handleChange}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

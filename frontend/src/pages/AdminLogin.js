import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/admin/login", form);

    localStorage.setItem("token", res.data.token);
    window.location.href = "/admin/dashboard";
  };

  return (
    <form className="admin-login" onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

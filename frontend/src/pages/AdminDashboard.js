import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);

  const loadEnquiries = async () => {
    const res = await axios.get("http://localhost:5000/enquiries", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setEnquiries(res.data);
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {enquiries.map((e) => (
        <div key={e.id} className="enquiry-item">
          <h3>{e.name}</h3>
          <p>{e.email}</p>
          <p>{e.message}</p>
          <small>Product ID: {e.product_id}</small>
        </div>
      ))}
    </div>
  );
}

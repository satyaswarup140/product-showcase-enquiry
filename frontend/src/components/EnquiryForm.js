import React, { useState } from "react";
import axios from "axios";

export default function EnquiryForm({ productId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/enquiries", {
      ...formData,
      product_id: productId,
    });

    alert("Enquiry submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <h3>Send an Enquiry</h3>

      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="email" placeholder="Email Address" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}

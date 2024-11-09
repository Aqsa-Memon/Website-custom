'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert("Thank you for your message!{` We'll`} get back to you soon.");
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Feel free to reach out with any inquiries or suggestions. {`We’re`} here to help!</p>
        <p><strong>Email:</strong> info@travelwebsite.com</p>
        <p><strong>Phone:</strong> +923 456 789</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message..."
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

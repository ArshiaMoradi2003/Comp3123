import React, { useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      email: "",
      fullName: "",
      address: "",
      city: "",
      province: "",
      postalCode: ""
    });
    setSubmitted(false);
  };

  return (
      <div style={{ maxWidth: 560, margin: "40px auto", fontFamily: "sans-serif" }}>
        <h1>Lab Week 10 - React Form</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <label>Email:</label><br />
            <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ width: "100%", padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>Full Name:</label><br />
            <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                style={{ width: "100%", padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>Address:</label><br />
            <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                style={{ width: "100%", padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>City:</label><br />
            <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                style={{ width: "100%", padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>Province:</label><br />
            <input
                type="text"
                name="province"
                required
                value={formData.province}
                onChange={handleChange}
                style={{ width: "100%", padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>Postal Code:</label><br />
            <input
                type="text"
                name="postalCode"
                required
                value={formData.postalCode.toUpperCase()}
                onChange={(e) => handleChange({ target: { name: "postalCode", value: e.target.value.toUpperCase() } })}
                placeholder="e.g., M5R 1M3"
                style={{ width: "100%", padding: 8, textTransform: "uppercase" }}
            />
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>

        {submitted && (
            <div style={{ marginTop: 30, padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
              {/* Exact display format */}
              <div style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
                <strong>Email:</strong>
                {"\n"}{formData.email}

                {"\n\n"}<strong>Full Name:</strong>
                {"\n"}{formData.fullName}

                {"\n\n"}<strong>Address:</strong>
                {"\n"}{formData.address}

                {"\n\n"}<strong>City:</strong>
                {"\n"}{formData.city}

                {"\n\n"}<strong>Province:</strong>
                {"\n"}{formData.province}

                {"\n\n"}<strong>Postal Code:</strong>
                {"\n"}{formData.postalCode}
              </div>
            </div>
        )}
      </div>
  );
}

export default App;

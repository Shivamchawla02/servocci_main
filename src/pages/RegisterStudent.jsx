import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () => {
  const nav = useNavigate();
 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",   // ✅ Add this line
  password: "",
  confirmPassword: "",
});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  setLoading(true);
  try {
    const res = await fetch("https://servocci-main-backend.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || "Registration failed");
    }

    alert("Student registered successfully!");
    nav("/login");
  } catch (err) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300 bg-gradient-to-br from-[#f7d088] via-[#ff9d3d] to-[#ff4f00]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#001b48]">
          Create Student Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2c6975] shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#430000]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2c6975] shadow-sm"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2c6975] shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#430000]">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2c6975] shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#430000]">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2c6975] shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#001b48] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2c6975] transition duration-300"
          >
            {loading ? "Registering…" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;

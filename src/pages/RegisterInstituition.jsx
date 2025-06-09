import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterInstitution = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    institutionName: "",
    institutionType: "",
    affiliation: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    phone: "",
    email: "",
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
      const res = await fetch("https://servocci-main-backend.onrender.com/api/auth/register-institution", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.institutionName,
          type: form.institutionType,
          affiliation: form.affiliation,
          address: form.address,
          state: form.state,
          city: form.city,
          pincode: form.pincode,
          phone: form.phone,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || "Registration failed");
      }

      alert("Institution registered successfully!");
      nav("/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2c6975] shadow-sm";

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white">
      <div className="w-full max-w-3xl p-6 sm:p-8 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300 bg-gradient-to-br from-[#f7d088] via-[#ff9d3d] to-[#ff4f00]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#001b48]">
          Register Your Institution
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Institution Name</label>
            <input name="institutionName" value={form.institutionName} onChange={handleChange} required placeholder="Institution Name" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Institution Type</label>
            <input name="institutionType" value={form.institutionType} onChange={handleChange} required placeholder="School/College" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Affiliation</label>
            <input name="affiliation" value={form.affiliation} onChange={handleChange} placeholder="CBSE/ICSE/State Board" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Address</label>
            <input name="address" value={form.address} onChange={handleChange} required placeholder="Full Address" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">State</label>
            <input name="state" value={form.state} onChange={handleChange} required placeholder="State" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">City</label>
            <input name="city" value={form.city} onChange={handleChange} required placeholder="City" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Pincode</label>
            <input name="pincode" value={form.pincode} onChange={handleChange} required placeholder="Pincode" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Official Email" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="Password" className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#430000]">Confirm Password</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required placeholder="Confirm Password" className={inputClass} />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#001b48] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2c6975] transition duration-300"
            >
              {loading ? "Registering…" : "Register Institution"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterInstitution;

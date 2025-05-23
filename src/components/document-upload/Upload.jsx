import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadDocuments = () => {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState({
    profilePhoto: null,
    aadharCard: null,
    panCard: null,
    tenthMarksheet: null,
    twelfthMarksheet: null,
    competitiveMarksheet: null,
  });

  const handleChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleUpload = () => {
    for (const key in documents) {
      if (!documents[key]) {
        toast.warn(`Please upload ${key.replace(/([A-Z])/g, ' $1')}`);
        return;
      }
    }

    toast.success("Documents uploaded (frontend simulation only)");
    setTimeout(() => {
      navigate('/admin-dashboard/employees');
    }, 2000);
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Upload Documents for <span className="text-green-700">Students</span>
        </h2>

        <div className="space-y-6">
          {/* Common Documents */}
          {[
            { label: 'Profile Photo', name: 'profilePhoto' },
            { label: 'Aadhaar Card', name: 'aadharCard' },
            { label: 'PAN Card', name: 'panCard' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block font-medium text-gray-700 mb-1 text-sm sm:text-base">{label}</label>
              <input
                type="file"
                name={name}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                onChange={handleChange}
              />
              {documents[name] && (
                <p className="text-sm text-gray-600 mt-1">{documents[name].name}</p>
              )}
            </div>
          ))}

          {/* Educational Certificates */}
          <h3 className="text-lg font-semibold text-gray-800 mt-6">Educational Certificates</h3>

          {[
            { label: '10th Marksheet', name: 'tenthMarksheet' },
            { label: '12th Marksheet', name: 'twelfthMarksheet' },
            { label: 'Competitive Marksheet (NEET/JEE/CUET/IPU-CET/BITSAT ETC)', name: 'competitiveMarksheet' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block font-medium text-gray-700 mb-1 text-sm sm:text-base">{label}</label>
              <input
                type="file"
                name={name}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                onChange={handleChange}
              />
              {documents[name] && (
                <p className="text-sm text-gray-600 mt-1">{documents[name].name}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleUpload}
          className="mt-8 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded text-sm sm:text-base"
        >
          Upload Documents
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;

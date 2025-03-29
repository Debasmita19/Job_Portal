import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ApplyPage() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  
    //here the API call will be done with Pradhap backend
        
    setTimeout(() => {
      navigate('/thankyou'); 
    }, 500);
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#4f46e5] to-[#9333ea] p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/90 text-gray-800 backdrop-blur-md rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">Apply for the Job</h2>

        <div className="space-y-4">
          
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

         
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          
          <div>
            <label className="block font-medium">Age</label>
            <input
              type="number"
              name="age"
              min="18"
              max="99"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

         
          <div>
            <label className="block font-medium">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

         
          <div>
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              rows="3"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          
          <div>
            <label className="block font-medium">Work Experience (years)</label>
            <input
              type="number"
              name="experience"
              min="0"
              max="50"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          
          <div>
            <label className="block font-medium mb-1">Resume</label>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleFileClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-all"
              >
                Upload Resume
              </button>
              <span className="text-sm text-gray-600 truncate w-full text-right">
                {formData.resume ? formData.resume.name : 'No file chosen'}
              </span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              name="resume"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 mt-6 rounded-md font-semibold transition-all"
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ApplyPage;

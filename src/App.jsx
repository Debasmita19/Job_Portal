// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import JobCard from './components/Jobcard';
import ApplyPage from './components/Resume/ApplyPage.jsx';
import ThankYouPage from './components/Resume/ThankYouPage.jsx';

function App() {
  const fetchJobsCustom = (criteria) => {
    console.log("Fetching jobs with criteria:", criteria);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Header />
            <Searchbar fetchJobsCustom={fetchJobsCustom} />
            <JobCard
              title="Software Engineer"
              company="Tech Corp"
              type="Full Time"
              experience="Mid Level"
              location="Remote"
              skills={["Javascript", "React", "Node.js"]}
              postedOn="2025-01-10"
            />
          </>
        }
      />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/thankyou" element={<ThankYouPage />} /> 
    </Routes>
  );
}

export default App;

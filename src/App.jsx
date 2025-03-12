import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import JobCard from './components/Jobcard';

function App() {
    const fetchJobsCustom = (criteria) => {
        console.log("Fetching jobs with criteria:", criteria);
    };

    return (
        <div>
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
                job_link="https://example.com"
                postedOn="2025-01-10"
            />
        </div>
    );
}

export default App;

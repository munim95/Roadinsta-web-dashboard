import React, { useState } from 'react';
import './JobsInProgress.css';

function JobsInProgress() {
  // Dummy data for jobs in progress
  const [jobsInProgress, setJobsInProgress] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      driverName: 'Driver 1',
      location: '123 Main St, City',
      status: 'In Progress'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      driverName: 'Driver 2',
      location: '456 Elm St, Town',
      status: 'In Progress'
    }
  ]);

  return (
    <div className="jobs-in-progress-container">
      <h2>Manage Jobs in Progress</h2>
      <div className="jobs-in-progress-list">
        {jobsInProgress.map(job => (
          <div key={job.id} className="job-in-progress">
            <h3>{job.customerName}</h3>
            <p><strong>Assigned Driver:</strong> {job.driverName}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Status:</strong> {job.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsInProgress;

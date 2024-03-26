import React, { useState } from 'react';
import './JobAssignment.css';

function JobAssignment() {
  // Dummy data for job assignments
  const [jobAssignments, setJobAssignments] = useState([
    {
      id: 1,
      driver: 'Driver 1',
      jobLocation: 'City A',
      distanceToNextJob: 5,
      status: 'Pending'
    },
    {
      id: 2,
      driver: 'Driver 2',
      jobLocation: 'City B',
      distanceToNextJob: 3,
      status: 'In Progress'
    }
  ]);

  return (
    <div className="job-assignment-container">
      <h2>Automate Job Assignment</h2>
      <div className="job-assignments-list">
        {jobAssignments.map(assignment => (
          <div key={assignment.id} className="job-assignment">
            <p><strong>Driver:</strong> {assignment.driver}</p>
            <p><strong>Job Location:</strong> {assignment.jobLocation}</p>
            <p><strong>Distance to Next Job:</strong> {assignment.distanceToNextJob} miles</p>
            <p><strong>Status:</strong> {assignment.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobAssignment;

import React, { useState } from 'react';
import './JobRequests.css';

function JobRequests() {
  // Dummy data for job requests
  const [jobRequests, setJobRequests] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      vehicleDetails: 'Toyota Camry',
      location: '123 Main St, City',
      photos: ['photo1.jpg', 'photo2.jpg'],
      status: 'pending'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      vehicleDetails: 'Honda Accord',
      location: '456 Elm St, Town',
      photos: ['photo3.jpg', 'photo4.jpg'],
      status: 'accepted'
    }
  ]);

  return (
    <div className="job-requests-container">
      <h2>Manage Incoming Job Requests</h2>
      <div className="job-requests-list">
        {jobRequests.map(job => (
          <div key={job.id} className="job-request">
            <h3>{job.customerName}</h3>
            <p><strong>Vehicle:</strong> {job.vehicleDetails}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <div className="photos-container">
              {job.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index + 1}`} />
              ))}
            </div>
            <div className="action-buttons">
              <button className="accept-button">Accept</button>
              <button className="decline-button">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobRequests;

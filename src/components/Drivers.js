import React, { useState } from 'react';
import './Drivers.css';

function Drivers() {
  // Dummy data for drivers
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: 'John Doe',
      qualification: 'Truck Driver',
      vehicleQualified: ['Truck 1', 'Van 1'],
      loginCredentials: {
        username: 'johndoe',
        password: 'password123'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      qualification: 'Van Driver',
      vehicleQualified: ['Van 1'],
      loginCredentials: {
        username: 'janesmith',
        password: 'password456'
      }
    }
  ]);

  return (
    <div className="drivers-container">
      <h2>Manage Drivers</h2>
      <div className="drivers-list">
        {drivers.map(driver => (
          <div key={driver.id} className="driver">
            <h3>{driver.name}</h3>
            <p><strong>Qualification:</strong> {driver.qualification}</p>
            <p><strong>Vehicles Qualified:</strong> {driver.vehicleQualified.join(', ')}</p>
            <p><strong>Login Credentials:</strong></p>
            <p>Username: {driver.loginCredentials.username}</p>
            <p>Password: {driver.loginCredentials.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;

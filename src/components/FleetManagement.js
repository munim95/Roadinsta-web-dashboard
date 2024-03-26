import React, { useState } from 'react';
import './FleetManagement.css';

function FleetManagement() {
  // Dummy data for fleet vehicles
  const [fleetVehicles, setFleetVehicles] = useState([
    {
      id: 1,
      vehicleName: 'Truck 1',
      serviceDueDate: '2024-04-30',
      towWeightCapacity: '10 tons'
    },
    {
      id: 2,
      vehicleName: 'Van 1',
      serviceDueDate: '2024-05-15',
      towWeightCapacity: '3 tons'
    }
  ]);

  return (
    <div className="fleet-management-container">
      <h2>Manage Fleet</h2>
      <div className="fleet-vehicles-list">
        {fleetVehicles.map(vehicle => (
          <div key={vehicle.id} className="fleet-vehicle">
            <h3>{vehicle.vehicleName}</h3>
            <p><strong>Service Due Date:</strong> {vehicle.serviceDueDate}</p>
            <p><strong>Tow Weight Capacity:</strong> {vehicle.towWeightCapacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FleetManagement;

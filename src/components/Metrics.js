import React, { useState } from 'react';
import './Metrics.css';

function Metrics() {
  // Dummy data for metrics
  const [metricsData] = useState({
    jobAcceptanceRate: 75,
    customerRatings: 4.5,
    performanceComparison: {
      ourCompany: 80,
      otherCompany: 70
    },
    driverRatings: {
      driver1: 4.2,
      driver2: 4.8
    }
  });

  return (
    <div className="metrics-container">
      <h2>Metrics</h2>
      <div className="metric">
        <h3>Job Acceptance Rate: {metricsData.jobAcceptanceRate}%</h3>
      </div>
      <div className="metric">
        <h3>Customer Ratings: {metricsData.customerRatings}</h3>
      </div>
      <div className="metric">
        <h3>Performance Comparison:</h3>
        <p>Our Company: {metricsData.performanceComparison.ourCompany}</p>
        <p>Other Company: {metricsData.performanceComparison.otherCompany}</p>
      </div>
      <div className="metric">
        <h3>Driver Ratings:</h3>
        <p>Driver 1: {metricsData.driverRatings.driver1}</p>
        <p>Driver 2: {metricsData.driverRatings.driver2}</p>
      </div>
    </div>
  );
}

export default Metrics;

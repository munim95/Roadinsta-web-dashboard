import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Navigate, Routes } from 'react-router-dom';
import './App.css';
import JobRequests from './components/JobRequests';
import FleetManagement from './components/FleetManagement';
import Metrics from './components/Metrics';
import Drivers from './components/Drivers';
import JobsInProgress from './components/JobsInProgress';
import Quotes from './components/Quotes';
import JobAssignment from './components/JobAssignment';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleLogin = (username, password) => {
    // Simulating login authentication
    if (username === 'admin' && password === 'pass') {
      setIsLoggedIn(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div  className={`app-container ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <header>
          <h1>Fleet Management Dashboard</h1>
          <button className="toggle-sidebar-button" onClick={toggleSidebar}>
            <img src='logo192.png' width={30}/>
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              isLoggedIn ? <Navigate to="/metrics" /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/metrics" element={<Metrics/>} />
            <Route path="/job-requests" element={<JobRequests/>} />
            <Route path="/fleet-management" element={<FleetManagement/>} />
            <Route path="/drivers" element={<Drivers/>} />
            <Route path="/jobs-in-progress" element={<JobsInProgress/>} />
            <Route path="/quotes" element={<Quotes/>} />
            <Route path="/job-assignment" element={<JobAssignment/>} />
          </Routes>
        </main>
        {isLoggedIn && (
          <aside className="sidebar">
            <nav>
              <ul>
                <li><NavLink to="/metrics">Metrics</NavLink></li>
                <li><NavLink to="/job-requests">Job Requests</NavLink></li>
                <li><NavLink to="/fleet-management">Fleet Management</NavLink></li>
                <li><NavLink to="/drivers">Drivers</NavLink></li>
                <li><NavLink to="/jobs-in-progress">Jobs in Progress</NavLink></li>
                <li><NavLink to="/quotes">Quotes</NavLink></li>
                <li><NavLink to="/job-assignment">Job Assignment</NavLink></li>
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </Router>
  );
}

export default App;

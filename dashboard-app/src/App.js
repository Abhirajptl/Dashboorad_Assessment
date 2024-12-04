import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AnalyticsCard from './components/AnalyticsCard';
import AverageDailySales from './components/AverageDailySales';
import SalesOverview from './components/SalesOverview';
import EarningsReport from './components/EarningsReport';
import SupportTracker from './components/SupportTracker';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDashboard from './components/TaskDashboard';

function App() {
  return (
    <Router>
    <div className="dashboard-app">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-grid">
          <AnalyticsCard />
          <AverageDailySales />
          <SalesOverview />
          <EarningsReport />
          <SupportTracker />
          <Routes>
            <Route path="/tasks" element={<TaskDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;

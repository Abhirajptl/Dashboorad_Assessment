import React from 'react';
import './SupportTracker.css';

const SupportTracker = () => {
  return (
    <div className="support-tracker-card">
      <h3>Support Tracker</h3>
      <p>Total Tickets: <b>164</b></p>
      <div className="tracker-stats">
        <div>
          <p>New Tickets</p>
          <b>142</b>
        </div>
        <div>
          <p>Open Tickets</p>
          <b>28</b>
        </div>
        <div>
          <p>Response Time</p>
          <b>1 Day</b>
        </div>
      </div>
      <div className="progress">
        <p>Completed Task</p>
        <b>85%</b>
      </div>
    </div>
  );
};

export default SupportTracker;

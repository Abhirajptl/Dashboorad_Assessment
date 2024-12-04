import React from 'react';
import './SalesOverview.css';

const SalesOverview = () => {
  return (
    <div className="sales-overview-card">
      <div className="sales-overview-header">
        <h3>Sales Overview</h3>
        <span className="sales-growth">+18.2%</span>
      </div>
      <div className="sales-overview-content">
        <h2>$42.5k</h2>
        <p>Total Sales This Month</p>
        <div className="sales-breakdown">
          <div className="sales-metric">
            <span>Order</span>
            <h4>62.2%</h4>
            <p>6,440</p>
          </div>
          <div className="sales-divider" />
          <div className="sales-metric">
            <span>Visits</span>
            <h4>25.5%</h4>
            <p>12,749</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;

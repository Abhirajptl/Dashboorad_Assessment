import React from 'react';
import './EarningsReport.css';

const EarningsReport = () => {
  return (
    <div className="earnings-card">
      <h3>Earnings Reports</h3>
      <p>Weekly Earnings Overview</p>
      <div className="stats">
        <div>
          <p>Earnings</p>
          <b>$545.69</b>
        </div>
        <div>
          <p>Profit</p>
          <b>$256.34</b>
        </div>
        <div>
          <p>Expense</p>
          <b>$74.19</b>
        </div>
      </div>
    </div>
  );
};

export default EarningsReport;

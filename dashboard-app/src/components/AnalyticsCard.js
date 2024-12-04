import React from 'react';
import './AnalyticsCard.css';

const AnalyticsCard = () => {
  return (
    <div className="analytics-card">
      <h3>Website Analytics</h3>
      <p>Total Conversion Rate: <b>28.5%</b></p>
      <div className="abc">
      <div className="stats">
        <div>Spending: <b>12h</b></div>
        <div>Orders: <b>127</b></div>
        <div>Order Size: <b>18</b></div>
        <div>Items: <b>2.3k</b></div>
      </div>
      <div className='xyz'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljBqtmZnZFkn1PBJuDkOUfAhRJNHM2I8_nA&s" />
      </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;

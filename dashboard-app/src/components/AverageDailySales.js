import React from "react";
import "./AverageDailySales.css";

const AverageDailySales = () => {
  return (
    <div className="average-daily-sales">
      <div>
        <h3>Average Daily Sales</h3>
        <p>Total Sales This Month</p>
        <h2>$28,450</h2>
      </div>
      <div className="sales-chart">
        {/* Add a line chart using a library or placeholder here */}
        {/* <div className="chart-placeholder">📈</div>  */}
        <img src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Chart-Increasing-3d-icon.png" />
      </div>
    </div>
  );
};

export default AverageDailySales;

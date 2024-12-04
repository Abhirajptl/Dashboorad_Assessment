import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Vuexy</h2>
      <ul className="menu">
        <li className="active">
          <span className="menu-icon">📊</span> Dashboards
        </li>
        <li>Analytics</li>
        <li>CRM</li>
        <li>eCommerce</li>
        <li>Logistics</li>
        <li>Academy</li>
        <li>Layouts</li>
        <li>Front Pages</li>
      </ul>
      <ul className="apps">
        <li>Email</li>
        <li>Chat</li>
        <li>Calendar</li>
        <li>Kanban</li>
        <li>eCommerce</li>
        <li>Academy</li>
        <li>Logistics</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';

const TaskDashboard = () => {
  const [showModal, setShowModal] = useState(false); // Declare state for modal visibility

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={openModal}>Add Task</button>
      {showModal && (
        <div>
          <h2>Task Modal</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default TaskDashboard;

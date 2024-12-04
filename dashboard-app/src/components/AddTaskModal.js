import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import './AddTaskModal.css';

const AddTaskModal = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleSubmit = () => {
    dispatch(addTask({ ...task, id: Date.now(), completed: false }));
    setTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Task</h3>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={e => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={e => setTask({ ...task, description: e.target.value })}
        />
        <input
          type="date"
          value={task.dueDate}
          onChange={e => setTask({ ...task, dueDate: e.target.value })}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTaskModal;

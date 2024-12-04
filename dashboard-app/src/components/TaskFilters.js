import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/tasksSlice';
import './TaskFilters.css';

const TaskFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className="task-filters">
      <button onClick={() => dispatch(setFilter('all'))}>All Tasks</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
      <button onClick={() => dispatch(setFilter('overdue'))}>Overdue</button>
    </div>
  );
};

export default TaskFilters;

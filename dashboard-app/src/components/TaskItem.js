import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, markAsCompleted } from '../features/tasks/tasksSlice';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={() => dispatch(markAsCompleted(task.id))}>Mark as Completed</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;

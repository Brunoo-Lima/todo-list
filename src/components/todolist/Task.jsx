import React from 'react';

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <div style={{ textDecoration: task.isComplete ? 'line-through' : '' }}>
      <div>
        <p>{task.text}</p>
        <p>{task.category}</p>
      </div>

      <button onClick={() => completeTask(task.id)}>Completar</button>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};

export default Task;

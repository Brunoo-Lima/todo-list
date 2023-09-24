import { useState } from 'react';
import Task from './Task';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade',
      category: 'Trabalho',
      isComplete: false,
    },
    {
      id: 2,
      text: 'Estudar TypeScript',
      category: 'Estudo',
      isComplete: false,
    },
  ]);

  const deleteTask = (id) => {
    const newTask = [...tasks];
    const filterTask = newTask.filter((task) => (task.id !== id ? task : null));
    setTasks(filterTask);
  };

  const completeTask = (id) => {
    const newTask = [...tasks];
    newTask.map((task) =>
      task.id == id ? (task.isComplete = !task.isComplete) : task,
    );
    setTasks(newTask);
  };

  // const addTask = (text, category) => {
  //   setTasks([...tasks, tasks]);
  // };

  return (
    <div>
      {tasks == '' ? (
        'Não há tarefas'
      ) : (
        <div>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;

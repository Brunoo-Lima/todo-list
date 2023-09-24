import { useState } from 'react';
import Task from './Task';
import styled from 'styled-components';
import TaskForm from './TaskForm';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

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

  const addTask = (text, category) => {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isComplete: false,
      },
    ]);
  };

  return (
    <Content>
      <h1>Lista de Tarefas</h1>
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
      <TaskForm addTask={addTask} />
    </Content>
  );
};

export default TodoList;

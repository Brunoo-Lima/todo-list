import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade',
      category: 'Trabalho',
      isComplete: false,
    },
  ]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  const deleteTask = (id) => {
    const newTask = [...tasks];
    const filterTask = newTask.filter((task) => (task.id !== id ? task : null));
    setTasks(filterTask);
    toast.success('Tarefa deletada com sucesso');
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

  const contextValue = {
    tasks,
    setTasks,
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
    deleteTask,
    addTask,
    completeTask,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

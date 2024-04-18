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
  const [filter, setFilter] = useState('Todas');
  const [filterCategory, setFilterCategory] = useState('Todas');
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

  const filteredTasks = tasks.filter((task) => {
    const matchesTask = task.text.toLowerCase().includes(search.toLowerCase());

    const matchesIsCompleted =
      filter === 'Todas'
        ? task
        : filter === 'Finalizada'
        ? task.isComplete
        : !task.isComplete;

    const matchesCategories =
      filterCategory === 'Todas' ? true : filterCategory === task.category;

    return matchesTask && matchesIsCompleted && matchesCategories;
  });

  const sortedTasks = filteredTasks.sort((t1, t2) =>
    sort === 'Asc'
      ? t1.text.localeCompare(t2.text)
      : t2.text.localeCompare(t1.text),
  );

  const contextValue = {
    search,
    setSearch,
    filter,
    setFilter,
    setSort,
    deleteTask,
    addTask,
    completeTask,
    sortedTasks,
    filterCategory,
    setFilterCategory,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

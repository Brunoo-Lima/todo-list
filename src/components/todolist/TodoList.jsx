import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { LuListTodo } from 'react-icons/lu';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import { toast } from 'react-toastify';
import { Container, Icon, IconTitle, Title } from './styles/TodoListStyle';

const TodoList = () => {
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
  const notTask = 'Não há tarefas';

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

  return (
    <Container>
      <IconTitle>
        <Icon>
          <LuListTodo />
        </Icon>
        <Title>Lista de Tarefas</Title>
      </IconTitle>

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      {tasks == '' ? (
        <p style={{ textAlign: 'center', margin: '20px 0' }}>{notTask}</p>
      ) : (
        <div>
          {tasks
            .filter((task) =>
              filter === 'Todas'
                ? true
                : filter === 'Finalizada'
                ? task.isComplete
                : !task.isComplete,
            )
            .filter((task) =>
              task.text.toLowerCase().includes(search.toLowerCase()),
            )
            .sort((a, b) =>
              sort === 'Asc'
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text),
            )
            .map((task) => (
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
    </Container>
  );
};

export default TodoList;

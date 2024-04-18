import { useContext } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { LuListTodo } from 'react-icons/lu';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import { Container, Icon, IconTitle, Title } from './styles/TodoListStyle';
import { UserContext } from '../../UserContext';

const TodoList = () => {
  const {
    tasks,
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
    deleteTask,
    completeTask,
    addTask,
  } = useContext(UserContext);

  const notTask = 'Não há tarefas';

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

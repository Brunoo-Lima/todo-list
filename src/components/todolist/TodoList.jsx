import { useContext } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { LuListTodo } from 'react-icons/lu';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import {
  Container,
  Icon,
  IconTitle,
  TextNotTask,
  Title,
} from './styles/TodoListStyle';
import { UserContext } from '../../UserContext';

const TodoList = () => {
  const {
    search,
    setSearch,
    filter,
    setFilter,
    setSort,
    deleteTask,
    completeTask,
    addTask,
    sortedTasks,
  } = useContext(UserContext);

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

      {sortedTasks.length <= 0 ? (
        <TextNotTask>Não há tarefas.</TextNotTask>
      ) : (
        <div>
          {sortedTasks.map((task) => (
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

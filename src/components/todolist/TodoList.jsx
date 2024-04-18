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
  const { sortedTasks } = useContext(UserContext);

  return (
    <Container>
      <IconTitle>
        <Icon>
          <LuListTodo />
        </Icon>
        <Title>Lista de Tarefas</Title>
      </IconTitle>

      <Search />
      <Filter />

      {sortedTasks.length <= 0 ? (
        <TextNotTask>Não há tarefas.</TextNotTask>
      ) : (
        <div>
          {sortedTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      )}

      <TaskForm />
    </Container>
  );
};

export default TodoList;

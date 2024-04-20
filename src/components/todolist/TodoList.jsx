import { useContext } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { LuListTodo } from 'react-icons/lu';
import {
  Container,
  Content,
  IconTitle,
  TextNotTask,
  Title,
  ContainerTasks,
  Tasks,
} from './styles/TodoListStyle';
import { UserContext } from '../../UserContext';
import Sidebar from './Sidebar';

const TodoList = () => {
  const { sortedTasks } = useContext(UserContext);

  return (
    <Container>
      <Sidebar />
      <Content>
        <TaskForm />

        <IconTitle>
          <LuListTodo size={24} />
          <Title>Lista de Tarefas</Title>
        </IconTitle>

        <ContainerTasks>
          {sortedTasks.length <= 0 ? (
            <TextNotTask>Não há tarefas.</TextNotTask>
          ) : (
            <Tasks>
              {sortedTasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </Tasks>
          )}
        </ContainerTasks>
      </Content>
    </Container>
  );
};

export default TodoList;

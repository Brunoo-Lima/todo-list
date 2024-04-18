import { useContext } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { LuListTodo } from 'react-icons/lu';
import {
  Container,
  Content,
  Icon,
  IconTitle,
  TextNotTask,
  Title,
  ContentTask,
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

        <ContentTask>
          <IconTitle>
            <Icon>
              <LuListTodo />
            </Icon>
            <Title>Lista de Tarefas</Title>
          </IconTitle>

          <Tasks>
            {sortedTasks.length <= 0 ? (
              <TextNotTask>Não há tarefas.</TextNotTask>
            ) : (
              <>
                {sortedTasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </>
            )}
          </Tasks>
        </ContentTask>
      </Content>
    </Container>
  );
};

export default TodoList;

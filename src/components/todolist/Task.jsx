import { RiDeleteBin6Line, RiCheckboxCircleLine } from 'react-icons/ri';
import {
  Category,
  Container,
  ContentButtons,
  Tasks,
  Text,
} from './styles/TaskStyle';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Task = ({ task }) => {
  const { deleteTask, completeTask } = useContext(UserContext);

  const getBackgroundColor = (category) => {
    switch (category.toLowerCase()) {
      case 'estudo':
        return '#2384e6f5';
      case 'trabalho':
        return '#ff6347';
      case 'pessoal':
        return '#4caf50';
      default:
        return '#ccc';
    }
  };

  return (
    <Tasks style={{ textDecoration: task.isComplete ? 'line-through' : '' }}>
      <Container>
        <Text>{task.text}</Text>
        <Category backgroundColor={getBackgroundColor(task.category)}>
          {task.category}
        </Category>
      </Container>

      <ContentButtons>
        <RiCheckboxCircleLine
          size={28}
          style={{ color: '#5cb85c', cursor: 'pointer', marginRight: '8px' }}
          onClick={() => completeTask(task.id)}
          Completar
        />
        <RiDeleteBin6Line
          size={28}
          style={{ color: '#e54', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
          X
        />
      </ContentButtons>
    </Tasks>
  );
};

export default Task;

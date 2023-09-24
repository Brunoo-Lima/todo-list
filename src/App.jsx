import styled from 'styled-components';
import TodoList from './components/todolist/TodoList';
import Global from './styles/Global';

const Aplication = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #efefefef;
  border-radius: 4px;
`;

const App = () => {
  return (
    <Aplication>
      <Global />
      <TodoList />
    </Aplication>
  );
};

export default App;

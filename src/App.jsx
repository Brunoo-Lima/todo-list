import TodoList from './components/todolist/TodoList';
import Global from './styles/Global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Aplication } from './styles/App';

const App = () => {
  return (
    <>
      <Aplication>
        <ToastContainer autoClose={1500} />
        <Global />
        <TodoList />
      </Aplication>
    </>
  );
};

export default App;

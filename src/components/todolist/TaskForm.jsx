import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Content,
  ContentInputs,
  Input,
  Select,
  Title,
} from './styles/TaskFormStyle';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) {
      toast.warning('Preencha todos os campos');
    } else {
      addTask(text, category);
      setText('');
      setCategory('');
      toast.success('Tarefa criada com sucesso');
    }
  };

  return (
    <Content>
      <form onSubmit={handleSubmit}>
        <Title>Adicionar tarefa</Title>
        <ContentInputs>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite a tarefa"
          />

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione a categoria</option>
            <option value="Estudo">Estudo</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
          </Select>

          <Button type="submit">Adicionar Tarefa</Button>
        </ContentInputs>
      </form>
    </Content>
  );
};

export default TaskForm;

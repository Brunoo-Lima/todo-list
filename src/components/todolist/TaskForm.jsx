import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 10px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 8px;
`;

const ContentInputs = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 4px;
  width: 300px;
  outline-color: #2384e6f5;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 4px;
  outline-color: #2384e6f5;
`;

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

  const Button = styled.button`
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    background-color: #333974;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  `;

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

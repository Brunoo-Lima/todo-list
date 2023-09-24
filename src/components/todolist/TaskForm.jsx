import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    addTask(text, category);
    setText('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Adicionar tarefa</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite a tarefa"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione a categoria</option>
          <option value="Estudo">Estudo</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
        </select>

        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
};

export default TaskForm;

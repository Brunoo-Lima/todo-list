import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../UserContext';
import TaskForm from '../TaskForm';

const renderTaskFormWithContext = () => {
  const defaultValues = {
    addTask: jest.fn(),
  };

  return render(
    <UserContext.Provider value={defaultValues}>
      <TaskForm />
    </UserContext.Provider>,
  );
};

describe('<TaskForm/>', () => {
  it('should render taskform title ', () => {
    const { getByText } = renderTaskFormWithContext();
    const title = getByText(/Adicionar tarefa/i);

    expect(title).toBeInTheDocument();
  });

  it('should render Input Component in the TaskForm', () => {
    const { getByPlaceholderText } = renderTaskFormWithContext();

    expect(getByPlaceholderText('Digite a tarefa')).toBeInTheDocument();
  });

  it('should render text button', () => {
    const { getByText } = renderTaskFormWithContext();

    const buttonTextElement = getByText('Adicionar');
    const buttonText = buttonTextElement.textContent;

    expect(buttonText).toBe('Adicionar');
  });

  it('should render button', () => {
    const { getByText } = renderTaskFormWithContext();

    const buttonTextElement = getByText('Adicionar');
    const buttonText = buttonTextElement.textContent;

    expect(buttonText).toBe('Adicionar');
  });
});

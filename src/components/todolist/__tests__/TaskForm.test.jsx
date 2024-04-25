import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/';
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

describe('Test TaskForm', () => {
  it('should render taskform title ', () => {
    const { getByText } = renderTaskFormWithContext();

    expect(getByText('Adicionar tarefa')).toBeInTheDocument();
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
});

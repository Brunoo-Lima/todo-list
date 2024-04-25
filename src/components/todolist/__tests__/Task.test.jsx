import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { UserContext } from '../../../UserContext';
import Task from './../Task';

const renderTaskWithContext = () => {
  const task = {
    text: 'Task text',
    category: 'trabalho',
  };

  const defaultValues = {
    deleteTask: jest.fn(),
    completeTask: jest.fn(),
  };

  return render(
    <UserContext.Provider value={defaultValues}>
      <Task task={task} />
    </UserContext.Provider>,
  );
};

describe('Test Task', () => {
  it('should render task text and category', () => {
    const { getByText } = renderTaskWithContext();

    const text = getByText('Task text');
    const category = getByText('trabalho');

    expect(text).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  it.only('should render the correct background color for each category', () => {
    //testar se o background esta de acordo com a categoria
    // const { getByText } = renderTaskWithContext();
    // const category = getByText('trabalho');
  });

  it('should call deleteTask when delete button is clicked', () => {
    //Testar click do botao
  });

  it('should call completeTask when delete button is clicked', () => {
    //Testar click do botao
  });
});

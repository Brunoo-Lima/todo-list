import { render } from '@testing-library/react';
import Search from '../Search';
import { UserContext } from '../../../UserContext';
import '@testing-library/jest-dom';

const renderSearchWithContext = () => {
  const defaultValues = {
    search: '',
    setSearch: jest.fn(),
  };

  return render(
    <UserContext.Provider value={defaultValues}>
      <Search />
    </UserContext.Provider>,
  );
};
describe.only('test Search', () => {
  it('should render return a component search', () => {
    renderSearchWithContext();
  });

  it('Should render text in the component search', () => {
    const { getByText } = renderSearchWithContext();

    expect(getByText('Pesquisar')).toBeInTheDocument();
  });

  it('Should render Input in the component Search', () => {
    const { getByPlaceholderText } = renderSearchWithContext();

    const input = getByPlaceholderText('Pesquise sua tarefa...');

    expect(input).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import Search from '../Search';
import { UserContext } from '../../../UserContext';
import '@testing-library/jest-dom';

describe('test Search', () => {
  it('should render return a component search', () => {
    render(
      <UserContext.Provider
        value={{
          search: '',
          setSearch: jest.fn(),
        }}
      >
        <Search />
      </UserContext.Provider>,
    );
  });

  it('Should render text in the component search', () => {
    const { getByText } = render(
      <UserContext.Provider
        value={{
          search: '',
          setSearch: jest.fn(),
        }}
      >
        <Search />
      </UserContext.Provider>,
    );

    expect(getByText('Pesquisar')).toBeInTheDocument();
  });

  it('Should render Input in the component Search', () => {
    const { getByPlaceholderText } = render(
      <UserContext.Provider
        value={{
          search: '',
          setSearch: jest.fn(),
        }}
      >
        <Search />
      </UserContext.Provider>,
    );

    const input = getByPlaceholderText('Pesquise sua tarefa...');

    expect(input).toBeInTheDocument();
  });
});

import { fireEvent, render } from '@testing-library/react';
import { UserContext } from './../../../UserContext';
import Filter from './../Filter';

const renderFilterWithContext = () => {
  const defaultValues = {
    filter: '',
    setFilter: jest.fn(),
    setSort: jest.fn(),
    filterCategory: '',
    setFilterCategory: jest.fn(),
  };

  return render(
    <UserContext.Provider value={defaultValues}>
      <Filter />
    </UserContext.Provider>,
  );
};

describe('Test Filter', () => {
  it('should render title in the component Filter', () => {
    const { getByText } = renderFilterWithContext();

    expect(getByText('Filtros')).toBeInTheDocument();
  });

  it('should render text ordenation in the component Filter', () => {
    const { getByText } = renderFilterWithContext();

    expect(getByText('Ordenar:')).toBeInTheDocument();
  });

  // it.only('should render click change status in the component Filter', () => {
  //   const { getByLabelText } = renderFilterWithContext();

  //   const button = fireEvent.change(getByLabelText(/Ordenar/), {
  //     target: { value: 'Asc' },
  //   });

  //   expect(button).toHaveBeenCalledWith('Asc');
  // });

  it('should render text status in the component Filter', () => {
    const { getByText } = renderFilterWithContext();

    expect(getByText('Status:')).toBeInTheDocument();
  });

  it('should render text category in the component Filter', () => {
    const { getByText } = renderFilterWithContext();

    expect(getByText('Categoria:')).toBeInTheDocument();
  });
});

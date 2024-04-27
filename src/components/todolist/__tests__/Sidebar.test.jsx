import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { UserContext } from '../../../UserContext';

const renderSidebarWithContext = () => {
  const defaultValues = {
    search: '',
    setSearch: jest.fn(),
  };

  return render(
    <UserContext.Provider value={defaultValues}>
      <Sidebar />
    </UserContext.Provider>,
  );
};

describe('<Sidebar />', () => {
  it.only('should render the Search Component in the sidebar', () => {
    const { getByText } = renderSidebarWithContext();

    const titleSearch = getByText('Pesquisar');

    expect(titleSearch).toBeInTheDocument();
  });

  it.only('should render the Filter Component in the sidebar', () => {
    const { getByText } = renderSidebarWithContext();

    const title = getByText('Filtros');

    expect(title).toBeInTheDocument();
  });
});

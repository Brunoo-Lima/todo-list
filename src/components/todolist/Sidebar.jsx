import { Container } from './styles/SidebarStyle';
import Search from '../search/Search';
import Filter from '../filter/Filter';

const Sidebar = () => {
  return (
    <Container>
      <Search />
      <Filter />
    </Container>
  );
};

export default Sidebar;

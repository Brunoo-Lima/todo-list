import { useContext } from 'react';
import Input from '../form/Input';
import { Container, Title } from './SearchStyle';
import { UserContext } from '../../UserContext';

const Search = () => {
  const { search, setSearch } = useContext(UserContext);

  return (
    <Container>
      <Title>Pesquisar</Title>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite sua pesquisa..."
      />
    </Container>
  );
};

export default Search;

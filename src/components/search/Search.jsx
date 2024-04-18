import Input from '../form/Input';
import { Container, Title } from './SearchStyle';

const Search = ({ search, setSearch }) => {
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

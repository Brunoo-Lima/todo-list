import { Content, Input, Title } from './SearchStyle';

const Search = ({ search, setSearch }) => {
  return (
    <Content>
      <Title>Pesquisar</Title>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite sua pesquisa..."
      />
    </Content>
  );
};

export default Search;

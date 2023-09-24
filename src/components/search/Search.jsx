import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  width: 500px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  outline-color: #2384e6f5;

  @media (max-width: 580px) {
    width: 400px;
  }

  @media (max-width: 580px) {
    width: 280px;
  }
`;

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

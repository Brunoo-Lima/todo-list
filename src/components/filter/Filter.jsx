import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-right: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
  margin-right: 6px;
  outline-color: #2384e6f5;
`;

const Ordenation = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <Content>
      <Text>Status: </Text>
      <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Todas</option>
        <option value="Complete">Finalizada</option>
        <option value="Incomplete">Pendente</option>
      </Select>

      <Ordenation>
        <Text>Ordenar: </Text>
        <Select onChange={(e) => setSort(e.target.value)}>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </Select>
      </Ordenation>
    </Content>
  );
};

export default Filter;

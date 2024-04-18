import { Content, Ordenation, Select, Text } from './FilterStyle';

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

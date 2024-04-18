import Select from '../form/Select';
import { Container, Ordenation, Text } from './FilterStyle';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <Container>
      <Text>Status: </Text>

      <Select
        options={[
          { value: 'All', label: 'Todas' },
          { value: 'Complete', label: 'Finalizada' },
          { value: 'Incomplete', label: 'Pendente' },
        ]}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Ordenation>
        <Text>Ordenar: </Text>

        <Select
          options={[
            { value: 'Asc', label: 'Asc' },
            { value: 'Desc', label: 'Desc' },
          ]}
          onChange={(e) => setSort(e.target.value)}
        />
      </Ordenation>
    </Container>
  );
};

export default Filter;

import { useContext } from 'react';
import Select from '../form/Select';
import { Container, Ordenation, Text } from './FilterStyle';
import { UserContext } from '../../UserContext';

const Filter = () => {
  const { filter, setFilter, setSort, filterCategory, setFilterCategory } =
    useContext(UserContext);

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

      <Text>Categoria:</Text>
      <Select
        options={[
          { value: 'All', label: 'Todas' },
          { value: 'Study', label: 'Estudo' },
          { value: 'Personal', label: 'Pessoal' },
          { value: 'Work', label: 'Trabalho' },
        ]}
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
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

import { useContext } from 'react';
import Select from '../form/Select';
import { Container, ContainerSelect, Ordenation, Text } from './FilterStyle';
import { UserContext } from '../../UserContext';

const Filter = () => {
  const { filter, setFilter, setSort, filterCategory, setFilterCategory } =
    useContext(UserContext);

  return (
    <Container>
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
      <ContainerSelect>
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
      </ContainerSelect>

      <ContainerSelect>
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
      </ContainerSelect>
    </Container>
  );
};

export default Filter;

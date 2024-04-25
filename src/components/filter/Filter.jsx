import { useContext } from 'react';
import Select from '../form/Select';
import {
  Container,
  ContainerSelect,
  Ordenation,
  Title,
  ContainerTitle,
  LineLeft,
  LineRight,
} from './FilterStyle';
import { UserContext } from '../../UserContext';

const Filter = () => {
  const { filter, setFilter, setSort, filterCategory, setFilterCategory } =
    useContext(UserContext);

  return (
    <Container>
      <ContainerTitle>
        <LineLeft></LineLeft>
        <Title>Filtros</Title>
        <LineRight></LineRight>
      </ContainerTitle>
      <Ordenation>
        <Select
          options={[
            { value: 'Asc', label: 'Asc' },
            { value: 'Desc', label: 'Desc' },
          ]}
          onChange={(e) => setSort(e.target.value)}
          label="Ordenar:"
        />
      </Ordenation>
      <ContainerSelect>
        <Select
          options={[
            { value: 'All', label: 'Todas' },
            { value: 'Complete', label: 'Finalizada' },
            { value: 'Incomplete', label: 'Pendente' },
          ]}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Status:"
        />
      </ContainerSelect>

      <ContainerSelect>
        <Select
          options={[
            { value: 'All', label: 'Todas' },
            { value: 'Study', label: 'Estudo' },
            { value: 'Personal', label: 'Pessoal' },
            { value: 'Work', label: 'Trabalho' },
          ]}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          label="Categoria:"
        />
      </ContainerSelect>
    </Container>
  );
};

export default Filter;

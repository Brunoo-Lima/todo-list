import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0.8125rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  margin: 0.375rem 0;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-right: 0.5rem;
  font-weight: 600;
`;

export const Ordenation = styled.div`
  display: flex;
  align-items: center;
  margin: 0.375rem 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

export const LineRight = styled.div`
  width: 100%;
  height: 2px;
  display: inline-block;
  background-color: #000;
`;

export const LineLeft = styled(LineRight)``;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: bold;
  text-align: center;
`;

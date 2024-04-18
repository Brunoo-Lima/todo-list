import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const IconTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Icon = styled.div`
  font-size: 2.5rem;

  @media (max-width: 536px) {
    font-size: 1.8rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-left: 8px;

  @media (max-width: 536px) {
    font-size: 1.8rem;
  }
`;

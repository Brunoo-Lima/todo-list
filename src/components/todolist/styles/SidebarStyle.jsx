import styled from 'styled-components';

export const Container = styled.div`
  background-color: #cecece;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 2rem 0.75rem;
  height: 100%;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

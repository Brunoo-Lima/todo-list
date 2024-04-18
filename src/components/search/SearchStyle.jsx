import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
`;

export const Input = styled.input`
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

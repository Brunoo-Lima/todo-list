import styled from 'styled-components';

export const InputField = styled.input`
  padding: 0.625rem;
  width: 300px;
  border-radius: 4px;
  border: none;
  outline-color: #2384e6f5;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 280px;
  }
`;

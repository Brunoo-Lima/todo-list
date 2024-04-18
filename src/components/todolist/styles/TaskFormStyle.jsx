import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 4px;
  outline-color: #2384e6f5;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  background-color: #333974;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

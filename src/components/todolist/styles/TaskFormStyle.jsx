import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem 0;
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  margin: 0 0.25rem;
  outline-color: #2384e6f5;
`;

export const Button = styled.button`
  padding: 0.625rem 0.9375rem;
  border-radius: 6px;
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

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
`;

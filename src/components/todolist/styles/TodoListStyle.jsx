import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  height: 90vh;

  max-width: 1100px;
  margin: 0 auto;
  background-color: #efefef;
  border-radius: 6px;
  border: 1px solid #c7c7c7;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  height: 100%;
  overflow-y: hidden;

  @media (max-width: 1000px) {
    margin: none;
  }

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

export const IconTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-left: 0.5rem;

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const ContainerTasks = styled.div`
  overflow: hidden;
  flex: 1;
  width: 520px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Tasks = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const TextNotTask = styled.p`
  text-align: center;
  margin: 1.5rem 0;
  font-size: 1rem;
`;

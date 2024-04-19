import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  height: 90vh;

  max-width: 1100px;
  margin: 0 auto;
  background-color: #efefefef;
  border-radius: 6px;
  border: 1px solid #c7c7c7;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 48px 20px;
  height: 100%;
  overflow-y: hidden;
`;

export const IconTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-left: 8px;
`;

export const ContainerTasks = styled.div`
  overflow: hidden;
  flex: 1;
  width: 520px;
`;

export const Tasks = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const TextNotTask = styled.p`
  text-align: center;
  margin: 24px 0;
  font-size: 16px;
`;

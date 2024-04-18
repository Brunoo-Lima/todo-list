import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  height: 90vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 60px 20px;
`;

export const ContentTask = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const IconTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-left: 8px;
`;

export const Tasks = styled.div`
  /* position: absolute; */
`;

export const TextNotTask = styled.p`
  text-align: center;
  margin: 24px 0;
  font-size: 16px;
`;

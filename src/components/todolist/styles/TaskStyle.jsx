import styled from 'styled-components';

export const Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7f7;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  width: 500px;

  @media (max-width: 536px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;

  @media (max-width: 536px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 536px) {
    border-bottom: 1px solid #cecece;
  }
`;

export const Category = styled.span`
  font-size: 16px;
  background-color: ${(props) => props.backgroundColor || '#ccc'};
  color: #fff;
  padding: 5px;
  margin-left: 10px;
  border-radius: 4px;

  @media (max-width: 536px) {
    margin-left: 0px;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

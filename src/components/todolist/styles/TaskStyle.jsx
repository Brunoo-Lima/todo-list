import styled from 'styled-components';

export const Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7f7;
  padding: 0.875rem;
  margin: 0.625rem auto;
  border-radius: 4px;
  width: 500px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    width: 300px;
    flex-direction: column;
  }

  @media (max-width: 467px) {
    width: 200px;
  }
`;
export const Container = styled.div`
  padding: 0.625rem 0;
  margin-bottom: 0.625rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.625rem;

  @media (max-width: 536px) {
    border-bottom: 1px solid #cecece;
    text-align: center;
  }
`;

export const Category = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  background-color: ${(props) => props.color || '#ccc'};
  color: #fff;
  padding: 0.3125rem 0.675rem;
  border-radius: 4px;

  @media (max-width: 536px) {
    margin-left: 0;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

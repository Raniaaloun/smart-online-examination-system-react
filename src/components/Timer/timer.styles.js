import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const TimerContainer = styled.div`
  border: 1px solid black;
  box-shadow: 0 0 1px 0 #000;
  width: fit-content;
  padding: 3px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1px 0 #000;
  border: 1px solid black;
  margin: 10px 0;
  padding: 3px;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1px 0 #000;
  border: 1px solid black;
  margin: 10px 0;
  padding: 3px;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px;
  cursor: pointer;
`;

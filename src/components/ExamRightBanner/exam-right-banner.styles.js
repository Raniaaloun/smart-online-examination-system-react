import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 30px auto;
  padding: 15px;
  box-shadow: 0 0 10px 1px #000;
  width: 150px;
`;

export const ExamTimerContainer = styled.div`
  border: 1px solid black;
  box-shadow: 0 0 1px 0 #000;
  width: fit-content;
  padding: 3px;
`;

export const ExamQuestionsContainer = styled.div`
  border: 1px solid black;
  box-shadow: 0 0 1px 0 #000;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const QuestionIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18px;
  outline: 1px solid black;
  margin: 3px;
  height: fit-content;
`;

export const RedQuestionFlag = styled.div`
  background-color: red;
  height: 5px;
  /* outline: 1px solid black; */
`;

export const ClearQuestionFlag = styled.div`
  height: 5px;
  /* outline: 1px solid black; */
`;

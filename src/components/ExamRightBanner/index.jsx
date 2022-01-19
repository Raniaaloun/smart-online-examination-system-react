import React from 'react';
import {
  BannerContainer,
  ExamTimerContainer,
  ExamQuestionsContainer,
  QuestionIconContainer,
  RedQuestionFlag,
  ClearQuestionFlag,
} from './exam-right-banner.styles';

function ExamRightBanner() {
  return (
    <>
      <BannerContainer>
        <ExamTimerContainer>Exam Timer</ExamTimerContainer>

        <ExamQuestionsContainer>
          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>1</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <RedQuestionFlag />
            <div>2</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>3</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>4</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>5</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>6</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>7</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>8</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>9</div>
          </QuestionIconContainer>

          <QuestionIconContainer>
            <ClearQuestionFlag />
            <div>10</div>
          </QuestionIconContainer>

          <br />
          <br />
          <br />
          <br />
          <div>Exam Questions</div>
          <br />
          <br />
        </ExamQuestionsContainer>
      </BannerContainer>
    </>
  );
}

export default ExamRightBanner;

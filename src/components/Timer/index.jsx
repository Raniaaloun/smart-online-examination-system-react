/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import Timer from 'react-timer';
import {
  AnswersContainer,
  HeaderContainer,
  QuestionContainer,
  RadioButtonContainer,
  TimerContainer,
} from './timer.styles';

function TimerComponent() {
  return (
    <>
      <HeaderContainer>
        <TimerContainer>Question Timer</TimerContainer>
      </HeaderContainer>

      <QuestionContainer>
        <div>Question #</div>
        <br />
        <div>Question Body (text)</div>
        <br /> <br /> <br /> <br /> <br />
      </QuestionContainer>

      <AnswersContainer>
        <RadioButtonContainer>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">HTML</label>
        </RadioButtonContainer>

        <br />
        <RadioButtonContainer>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">CSS</label>
        </RadioButtonContainer>

        <br />
        <RadioButtonContainer>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>
        </RadioButtonContainer>
      </AnswersContainer>
    </>
  );
}

export default TimerComponent;

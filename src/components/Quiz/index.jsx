import React from 'react';
import { useHistory } from 'react-router-dom';
import { QuizName } from './quiz.styles';

// eslint-disable-next-line react/prop-types
function Quiz({ title }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/pre-quiz');
  };
  return (
    <>
      <QuizName onClick={handleClick}>{title}</QuizName>
    </>
  );
}

export default Quiz;

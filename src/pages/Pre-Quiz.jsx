/* eslint-disable react/button-has-type */
import Header from 'components/Header';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Webcam from 'react-webcam';
import {
  Button,
  Container,
  ContainerOfContainers,
  PreQuizContainer,
  SuccessMessage,
} from './course.styles';

function PreQuiz() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/quiz');
  };

  return (
    <>
      <Header />
      <ContainerOfContainers>
        <Container>
          <PreQuizContainer>
            <h1>Quiz Name</h1>
            <p>Quiz details</p>
            <p>Look straight to the camera to confirm your identity</p>
            <Webcam audio={false} />
            <SuccessMessage>Identity Confirmed!</SuccessMessage>
            <Button onClick={handleClick}>Start Quiz</Button>
          </PreQuizContainer>
        </Container>
      </ContainerOfContainers>
    </>
  );
}

export default PreQuiz;

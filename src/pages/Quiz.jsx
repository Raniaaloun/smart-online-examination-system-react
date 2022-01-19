import ExamRightBanner from 'components/ExamRightBanner';
import Header from 'components/Header';
import TimerComponent from 'components/Timer';
import React from 'react';
import { Container, ContainerOfContainers } from './course.styles';

function Quiz() {
  return (
    <>
      <Header />
      <ContainerOfContainers>
        <Container>
          <TimerComponent content="Question Timer" />
        </Container>

        <ExamRightBanner />
      </ContainerOfContainers>
    </>
  );
}

export default Quiz;

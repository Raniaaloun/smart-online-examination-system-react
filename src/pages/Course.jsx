import Header from 'components/Header';
import Quiz from 'components/Quiz';
import React from 'react';
import { Container, CourseTitleContainer, Title } from './course.styles';

function Course() {
  return (
    <>
      <Header />
      <Container>
        <CourseTitleContainer>
          <Title>Course title</Title>
        </CourseTitleContainer>
        <Quiz title="Quiz 1" />
        <Quiz title="Mid Exam" />
      </Container>
    </>
  );
}

export default Course;

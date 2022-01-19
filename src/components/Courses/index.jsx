import React from 'react';
import Course from 'components/Course';
import JoinACourse from 'components/JoinACourse';

import { Container, CoursesContainer, Text } from './courses';

function Courses() {
  return (
    <>
      <Container>
        <JoinACourse />
        <CoursesContainer>
          <Text>My Courses: </Text>
          <br />
          <Course title="COMMUNICATION SKILLS I" />
          <Course title="INTR. TO PHILOSOPHY" />
          <Course title="DATA STRUCTURES" />
          <Course title="GENERAL CHEMISTRY" />
          <Course title="INTERFACING LAB" />
        </CoursesContainer>
      </Container>
    </>
  );
}

export default Courses;

import React from 'react';
import {
  Container,
  Text,
  SelectorsContainer,
  SelectorContainer,
  JoinBtn,
} from './join-a-course.styles';

function JoinACourse() {
  return (
    <>
      <Container>
        <Text>Join a course?</Text>
        <SelectorsContainer>
          <SelectorContainer>
            <label htmlFor="Faculty">
              Faculty:{' '}
              <select name="Faculty" id="Faculty">
                <option value="scienceAndArt">science and art</option>
                {/* <option value="IT">computer & information technology</option> */}
              </select>
            </label>
          </SelectorContainer>

          <SelectorContainer>
            <label htmlFor="Department">
              Department:{' '}
              <select name="Department" id="Department">
                {/* <option value="arabic">Arabic Language</option>
                <option value="english">English Language & Linguistics</option> */}
                <option value="mathemetics">Mathemetics</option>
              </select>
            </label>
          </SelectorContainer>

          <SelectorContainer>
            <label htmlFor="Course">
              Course:{' '}
              <select name="Course" id="Course">
                <option value="MATH99">MATH99</option>
                <option value="MATH101">MATH101</option>
                <option value="MATH102A">MATH102A</option>
              </select>
            </label>
          </SelectorContainer>
          <JoinBtn>Join</JoinBtn>
        </SelectorsContainer>
      </Container>
    </>
  );
}

export default JoinACourse;

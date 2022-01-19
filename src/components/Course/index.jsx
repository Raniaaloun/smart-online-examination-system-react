import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './course';

// eslint-disable-next-line react/prop-types
function Course({ title }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/course');
  };
  return (
    <>
      <Container onClick={handleClick}>
        <p>{title}</p>
      </Container>
    </>
  );
}

export default Course;

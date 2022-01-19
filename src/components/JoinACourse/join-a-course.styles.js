import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  box-shadow: 0 0 1px 1px #000;
  padding: 5px;
  padding-bottom: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: larger;
  margin: 10px 0;
`;

export const SelectorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* outline: 1px solid green; */
  justify-content: flex-start;
`;

export const SelectorContainer = styled.div`
  margin-right: 20px;
`;

export const JoinBtn = styled.button`
  background-image: linear-gradient(to left, ${colors.mediumPurple}, blue);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  /* height: 2.5rem; */
  width: 80px;
  outline: none;
  font-size: 15px;
`;

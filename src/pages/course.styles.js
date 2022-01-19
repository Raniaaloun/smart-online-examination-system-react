import styled from 'styled-components';

export const ContainerOfContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 80%; */
`;
export const Container = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: 80%;
  background-color: white;
  box-shadow: 0 0 10px 1px #000;
`;

export const CourseTitleContainer = styled.div`
  /* outline: 1px solid darkblue; */
  box-shadow: 0 0 3px 0 #000;
  /* height: 40px; */
  padding: 10px;
`;

export const Title = styled.p`
  font-size: 40px;
  margin: 0;
  font-weight: bold;
`;

export const PreQuizContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SuccessMessage = styled.div`
  border: 1px solid #28a745;
  border-radius: 5px;
  color: #28a745;
  padding: 12px;
  font-size: 20px;
  margin: 5px 0;
`;

export const Button = styled.button`
  background-color: #28a745;
  border-color: #28a745;
  border-radius: 5px;
  border: 1px solid #28a745;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 40px;
  margin: 20px 0;
  outline: none;
  width: 150px;
`;

export const DIV = styled.div`
  outline: 1px solid red;
`;

import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  margin: 200px auto;
  padding: 0 0.9375rem;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: #d3d3d3; */
  /* box-shadow: 0 0 10px 1px #000; */
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
`;

export const Logo = styled.img`
  width: 180px;
  margin: 15px;
`;

export const AppLogo = styled.img`
  width: 100px;
  /* margin: 15px; */
  background-color: white;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  /* box-shadow: 0 0 5px 0 #000; */
`;

export const Line = styled.div`
  background-image: linear-gradient(white, white);
  width: 1px;
  height: 300px;
  opacity: 0.5;
  border-radius: 50%;
  margin: 70px 0;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.div`
  font-family: 'Source Sans Pro';
  padding: 0 0.9375rem;
  width: fit-content;
  height: fit-content;
  background-color: white;
  border-radius: 4px;
  /* box-shadow: 0 0 5px 0 #000; */
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0 20px 0;
`;

export const Link = styled.a`
  color: ${colors.boringGreen};
  font-size: 0.9375rem;
  font-weight: bold;
  margin: 0.625rem;
  text-decoration: none;
`;

export const CardContainer = styled.form`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 50px 0 15px 0;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  height: 1.25rem;
  border-bottom: 1px solid grey;
  width: fit-content;
  margin: 5px 0 0 0;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.input`
  background-image: linear-gradient(to left, ${colors.mediumPurple}, blue);
  border: none;
  color: white;
  cursor: pointer;
  height: 2.5rem;
  width: 100%;
  outline: none;
`;

export const TextQuestion = styled.p`
  margin: 0;
`;

export const SignupText = styled.p`
  color: purple;
  margin: 0;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 0;
`;

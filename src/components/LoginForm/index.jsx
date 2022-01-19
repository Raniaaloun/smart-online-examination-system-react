import React from 'react';
import { useHistory } from 'react-router-dom';
import blueLogo from 'assets/blue_logo.png';
// import Just from 'assets/JUST.png';

import {
  // Line,
  AppLogo,
  // Logo,
  Container,
  // LogosContainer,
  LoginContainer,
  Input,
  Form,
  SubmitBtn,
  CardHeader,
  CardContainer,
  // ForgotPasswordLink,
  TextQuestion,
  SignupText,
} from './login-form.styles';

function LoginForm() {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/student-home');
  };

  const handleSignupClick = () => {
    history.push('/sign-up');
  };

  return (
    <>
      <Container>
        {/* <LogosContainer>
          <Logo src={Just} />
        </LogosContainer>

        <Line /> */}

        <LoginContainer>
          <CardHeader>
            <AppLogo src={blueLogo} />
          </CardHeader>

          <Form>
            <CardContainer onSubmit={handleSubmit}>
              <Input type="text" id="email" name="email" placeholder="Email" />
              <br />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <br />
              <SubmitBtn type="submit" value="Login" />

              <br />
              <br />
              {/* <br /> */}
              {/* <ForgotPasswordLink href="https://www.w3schools.com">
                Forgot password?
              </ForgotPasswordLink> */}
              <TextQuestion> Don`t have an account?</TextQuestion>
              <SignupText onClick={handleSignupClick}>Sign Up!</SignupText>
            </CardContainer>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
}

export default LoginForm;

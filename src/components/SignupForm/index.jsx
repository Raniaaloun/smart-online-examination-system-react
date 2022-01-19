import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  //   CardHeader,
  CardContainer,
  // Line,
  //   AppLogo,
  // Logo,
  Container,
  Form,
  Input,
  // LogosContainer,
  LoginContainer,
  RadioButtonsContainer,
  //   SignupText,
  SignUpHeader,
  SubmitBtn,
  // ForgotPasswordLink,
  TextQuestion,
} from './signup-form.styles';

function SignupForm() {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/student-home');
  };
  return (
    <>
      <Container>
        <LoginContainer>
          {/* </LoginContainer> */}

          <Form>
            <SignUpHeader>Sign Up</SignUpHeader>

            <CardContainer onSubmit={handleSubmit}>
              <Input
                type="text"
                id="FirstName"
                name="FirstName"
                placeholder="First Name"
              />
              <br />
              <Input
                type="text"
                id="LastName"
                name="LastName"
                placeholder="Last Name"
              />
              <br />
              <Input type="text" id="email" name="email" placeholder="Email" />
              <br />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <br />
              <TextQuestion>Role:</TextQuestion>
              <RadioButtonsContainer>
                <input type="radio" value="Instructor" name="role" /> Instructor
                <input type="radio" value="Student" name="role" /> Student
              </RadioButtonsContainer>
              <br />
              <TextQuestion>Please upload a clear personal image:</TextQuestion>
              <br />
              <label htmlFor="img">
                <input type="file" id="img" name="img" accept="image/*" />
              </label>
              <br />
              <SubmitBtn type="submit" value="Submit" />
            </CardContainer>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
}

export default SignupForm;

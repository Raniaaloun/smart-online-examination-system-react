import React from 'react';
import blueLogo from 'assets/blue_logo.png';
import NavBar from '../NavBar';
import {
  Container,
  LogoContainer,
  Title,
  AppLogo,
  StyledLink,
} from './header.styles';

/**
 * Component holding the header of the application.
 *
 * @return {JSX.Element} Header holding the logo word on the left and the navigation bar on the right.
 */
function Header() {
  return (
    <Container>
      <LogoContainer>
        <AppLogo src={blueLogo} />
        <Title>
          <StyledLink to="/">Smart Online Examination System</StyledLink>
        </Title>
      </LogoContainer>

      <NavBar />
    </Container>
  );
}

export default Header;

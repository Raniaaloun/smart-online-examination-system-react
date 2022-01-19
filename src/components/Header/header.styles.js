import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'styles/colors';
import breakpoints from 'styles/break-points';

export const Container = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 6.25rem 0;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 0 10px 1px #000;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 3.125rem 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppLogo = styled.img`
  width: 50px;
`;

export const Title = styled.p`
  color: ${colors.boringGreen};
  cursor: pointer;
  font-family: 'titillium web', sans-serif;
  font-size: 15px;
  width: 240px;
  text-align: right;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

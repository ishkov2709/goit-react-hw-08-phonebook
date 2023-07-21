import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLayout = styled.div``;

export const Main = styled.main`
  height: 100vh;
  padding: 40px 0;
`;

export const Container = styled.div`
  padding: 0 50px;
`;

export const StyledHeader = styled.header`
  padding: 20px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #0c0d64;
`;

export const Nav = styled.nav`
  display: inline-block;
`;

export const NavigLink = styled(NavLink)`
  color: #fff;

  text-decoration: none;

  transition: color 250ms linear;

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: #0cb482;
  }

  &.active {
    color: #0bf7b0;
  }
`;

export const AuthBox = styled.div`
  display: inline-block;
`;

export const Btn = styled.button`
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

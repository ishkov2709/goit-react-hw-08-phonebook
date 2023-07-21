import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const Nav = styled.nav`
  margin-right: auto;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;

  transition: color 100ms linear;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #bdbdbd;
  }
`;

export const Btn = styled(Button)`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;

  text-transform: capitalize;

  transition: color 100ms linear;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #bdbdbd;
  }
`;

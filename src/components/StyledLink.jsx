import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 20px;
  padding: 16px;
  border: none;
  color: black;

  &.active {
    color: red;
  }
`;

import { Container } from 'components/Container/Container.styled';
import { Header, Logo } from 'components/Header/Header.styled';
import { StyledLink } from 'components/StyledLink/StyledLink.styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/movies'}>Movies</StyledLink>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Movie Library
        </Logo>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;

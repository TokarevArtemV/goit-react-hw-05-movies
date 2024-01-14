import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container.styled';
import { Header, Logo } from 'components/Header/Header.styled';
import { HeaderLink } from 'components/StyledLink/StyledLink.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <HeaderLink to={'/'}>Home</HeaderLink>
        <HeaderLink to={'/movies'}>Movies</HeaderLink>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Movie Library
        </Logo>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;

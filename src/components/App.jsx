import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { StyledLink } from './StyledLink';
import { Header, Logo } from './Header';
import { useEffect, useState } from 'react';
import { getConfigurationDetails } from './service/movie-service';
import { Container } from './Container.styled';

export const App = () => {
  const [configDetails, setConfigDetails] = useState(null);

  useEffect(() => {
    if (configDetails !== null) return;

    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => console.log(err.message));
  });

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
      <Routes>
        <Route path="/" element={<Home configDetails={configDetails} />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails configDetails={configDetails} />}
        />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

import React, { lazy, useEffect, useState } from 'react';
import {
  getConfigurationDetails,
  getMovies,
} from 'components/service/movie-service';
import { Text } from 'components/Text/Text.styled';
import { HomeContainer } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
const MovieList = lazy(() => import('components/MovieList/MovieList'));

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movies === null) {
      setLoading(true);

      getMovies()
        .then(response => setMovies(response.results) ?? [])
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [movies]);

  return (
    <HomeContainer>
      <h2>Trending today</h2>
      {movies?.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </HomeContainer>
  );
};

export default Home;

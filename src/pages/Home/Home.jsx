import React, { lazy, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getConfigurationDetails,
  getMovies,
} from 'components/service/movie-service';
import { Text } from 'components/Text/Text.styled';
import { HomeContainer } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
const MovieList = lazy(() => import('components/MovieList/MovieList'));

const Home = () => {
  const [configDetails, setConfigDetails] = useState(null);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (configDetails === null) {
      setLoading(true);
      // getConfigurationDetails використовується для отримання данних з яких складається
      // повний шлях до зображень
      // `${configDetails.images.base_url}${configDetails.images.logo_sizes[1]}${cast.profile_path}`
      // https://developer.themoviedb.org/docs/image-basics
      getConfigurationDetails()
        .then(response => setConfigDetails(response))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
    if (configDetails !== null && movies === null) {
      setLoading(true);

      getMovies()
        .then(response => setMovies(response.results) ?? [])
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [configDetails, movies]);

  return (
    <HomeContainer>
      <h2>Trending today</h2>
      {movies?.length > 0 && (
        <MovieList movies={movies} configDetails={configDetails} />
      )}
      {loading && <Loader />}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </HomeContainer>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import {
  getConfigurationDetails,
  getMovies,
} from 'components/service/movie-service';
import { Text } from 'components/Text/Text.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState(null);

  useEffect(() => {
    if (configDetails !== null) return;

    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => console.log(err.message));
  });

  useEffect(() => {
    if (configDetails === null) return;
    getMovies()
      .then(response => setMovies(response.results) ?? [])
      .catch(err => setError(err.message));
    return () => {};
  }, [configDetails]);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <MovieList movies={movies} configDetails={configDetails} />
      )}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </>
  );
};

export default Home;
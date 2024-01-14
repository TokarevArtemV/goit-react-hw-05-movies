import { lazy, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  getConfigurationDetails,
  getMoviesByQuery,
} from 'components/service/movie-service';
import { Text } from 'components/Text/Text.styled';
import { Loader } from 'components/Loader/Loader';
import Search from 'components/Search/Search';

const MovieList = lazy(() => import('components/MovieList/MovieList'));

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (configDetails !== null) return;

    setLoading(true);

    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => setError(err.message))
      .finally(setLoading(false));
  }, [configDetails]);

  useEffect(() => {
    setLoading(true);

    if (query === '') {
      setMovies(null);
      setLoading(false);
      return;
    }

    getMoviesByQuery(query)
      .then(response => setMovies(response.results))
      .catch(err => setError(err.message))
      .finally(setLoading(false));
  }, [query]);

  const handleSubmit = query => {
    if (!query) return;
    const value = query;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      {movies?.length === 0 && <p>We don`t have any movies 😔</p>}
      {movies?.length > 0 && (
        <MovieList
          movies={movies}
          configDetails={configDetails}
          location={location}
        />
      )}
      {loading && <Loader />}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </>
  );
};

export default Movies;

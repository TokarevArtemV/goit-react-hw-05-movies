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
    if (query && !configDetails) {
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

    if (configDetails && query && !movies) {
      setLoading(true);

      getMoviesByQuery(query)
        .then(response => setMovies(response.results))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [configDetails, query, movies]);

  const handleSubmit = query => {
    if (!query) setMovies(null);

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

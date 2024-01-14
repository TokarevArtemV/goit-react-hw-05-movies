import { lazy, useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './Movies.styled';
import {
  getConfigurationDetails,
  getMoviesByQuery,
} from 'components/service/movie-service';
import { Text } from 'components/Text/Text.styled';
import { Loader } from 'components/Loader/Loader';

const MovieList = lazy(() => import('components/MovieList/MovieList'));

const Movies = () => {
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    inputRef.current.focus();
    if (configDetails !== null) return;

    setLoading(true);

    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => setError(err.message))
      .finally(setLoading(false));
  }, [configDetails]);

  useEffect(() => {
    inputRef.current.focus();
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

  const onSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.query.value;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <Searchbar>
        <SearchForm className="SearchForm" onSubmit={onSubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            ref={inputRef}
            name="query"
            defaultValue={query}
            placeholder="Search movies"
          />
          <SearchFormButton type="submit" className="SearchForm-button">
            <ImSearch
              style={{ width: '24px', height: '24px', color: ' #0c154d' }}
            />
          </SearchFormButton>
        </SearchForm>
      </Searchbar>
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

import { useEffect, useRef, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import {
  getConfigurationDetails,
  getMoviesByQuery,
} from 'components/service/movie-service';
import { Text } from 'components/Text/Text.styled';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState(null);
  const moviId = searchParams.get('query') ?? '';

  useEffect(() => {
    inputRef.current.focus();
    if (configDetails !== null) return;

    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => setError(err.message));
  });

  useEffect(() => {
    getMoviesByQuery(moviId)
      .then(response => setMovies(response.results))
      .catch(err => setError(err.message));
  }, [moviId]);

  // const handleChange = ({ target: { value } }) => {
  //   setSearchParams(value !== '' ? { query: value } : {});
  // };

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
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            ref={inputRef}
            name="query"
            defaultValue={moviId}
            placeholder="Search movies"
          />
          <SearchFormButton type="submit" className="SearchForm-button">
            <ImSearch
              style={{ width: '24px', height: '24px', color: ' #0c154d' }}
            />
          </SearchFormButton>
        </SearchForm>
      </Searchbar>
      {movies.length > 0 && (
        <MovieList movies={movies} configDetails={configDetails} />
      )}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </>
  );
};

export default Movies;

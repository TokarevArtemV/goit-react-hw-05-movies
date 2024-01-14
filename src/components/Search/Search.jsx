import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './Search.styled';

const Search = ({ handleSubmit }) => {
  const inputRef = useRef();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.query.value;
    handleSubmit(value);
  };
  return (
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
  );
};

export default Search;

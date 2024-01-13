import React from 'react';

const Movies = () => {
  const onSubmit = () => {};

  return (
    <>
      <form action="">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <SiIconfinder className="SearchForm-button-icon" />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            ref={inputRef}
            name="query"
            value={query}
            onChange={handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </form>
    </>
  );
};

export default Movies;

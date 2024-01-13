import React from 'react';
import Movie from '../Movie/Movie';
import { Grid } from '../Grid/Grid.styled';
import { ButtonListMovie } from './MovieList.styled';

const MovieList = ({ movies, configDetails }) => {
  if (configDetails === null) return;
  return (
    <>
      <ButtonListMovie type="button">Go back</ButtonListMovie>
      <Grid>
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} configDetails={configDetails} />
        ))}
      </Grid>
    </>
  );
};

export default MovieList;

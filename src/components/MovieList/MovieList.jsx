import React from 'react';
import Movie from '../Movie/Movie';
import { Grid } from '../Grid/Grid.styled';

const MovieList = ({ movies, configDetails }) => {
  if (configDetails === null) return;
  return (
    <Grid>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} configDetails={configDetails} />
      ))}
    </Grid>
  );
};

export default MovieList;

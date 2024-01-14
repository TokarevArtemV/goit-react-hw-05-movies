import React from 'react';
import Movie from '../Movie/Movie';
import { Grid } from './MovieList.styled';

const MovieList = ({ movies, configDetails, location }) => {
  if (configDetails === null) return;
  return (
    <Grid>
      {movies.map((movie, i) => (
        <Movie
          key={i}
          movie={movie}
          configDetails={configDetails}
          location={location}
        />
      ))}
    </Grid>
  );
};

export default MovieList;

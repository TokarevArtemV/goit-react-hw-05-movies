import React from 'react';
import { NavLink } from 'react-router-dom';
import { GridItem, Image } from '../Grid/Grid.styled';
import { Text } from '../Text/Text.styled';

const Movie = ({ movie, configDetails }) => {
  const baseUrl = configDetails.images.base_url;
  const fileSize = configDetails.images.logo_sizes[5];

  return (
    <GridItem>
      <NavLink
        to={`/movies/${movie.id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          height: '100%',
        }}
      >
        <Image
          src={`${baseUrl}/${fileSize}/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <Text>{movie.original_title}</Text>
      </NavLink>
    </GridItem>
  );
};

export default Movie;

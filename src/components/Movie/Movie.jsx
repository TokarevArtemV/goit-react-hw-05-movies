import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '../Text/Text.styled';
import { GridItem, Image } from './Movie.styled';

const Movie = ({ movie, configDetails, location }) => {
  const baseUrl = configDetails.images.base_url;
  const fileSize = configDetails.images.logo_sizes[5];
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <GridItem>
      <NavLink
        to={`/movies/${movie.id}`}
        state={{ from: location }}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          height: '100%',
        }}
      >
        <Image
          src={
            !!movie.backdrop_path
              ? `${baseUrl}/${fileSize}/${movie.backdrop_path}`
              : defaultImg
          }
          alt={movie.title}
        />
        <Text>{movie.original_title}</Text>
      </NavLink>
    </GridItem>
  );
};

export default Movie;

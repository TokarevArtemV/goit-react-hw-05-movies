import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MovieInfo,
  MovieTextContainer,
  Poster,
  Text,
} from 'components/pages/MovieDetails.styled';
import { getMoviesById } from 'components/service/movie-service';
import Genres from 'components/styles/Genres/Genres';

const MovieDetails = ({ configDetails }) => {
  const { movieId } = useParams(null);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId === null) return;

    getMoviesById(movieId)
      .then(response => setMovie(response) ?? {})
      .catch(err => setError(err.message));

    return () => {};
  }, [movieId]);

  if (configDetails === null) return;

  const baseUrl = configDetails.images.base_url;
  const fileSize = configDetails.images.logo_sizes[2];

  return (
    <>
      <MovieInfo>
        <Poster
          src={`${baseUrl}/${fileSize}/${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieTextContainer>
          <Text> {movie.original_title}</Text>
          <p>User score: {Math.round(Number(movie.vote_average) * 10)}%</p>
          <p style={{ fontWeight: '700' }}>Overview</p>
          <p>{movie.overview}</p>
          <p style={{ fontWeight: '700' }}>Genres</p>
          <Genres genresArr={movie.genres} />
        </MovieTextContainer>
      </MovieInfo>
    </>
  );
};

export default MovieDetails;

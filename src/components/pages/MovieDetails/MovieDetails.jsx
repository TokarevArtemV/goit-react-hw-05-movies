import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  MovieInfo,
  MovieTextContainer,
  Poster,
} from 'components/pages/MovieDetails/MovieDetails.styled';
import {
  getConfigurationDetails,
  getMoviesById,
} from 'components/service/movie-service';
import Genres from 'components/Genres/Genres';
import { AddInfo } from 'components/AddInfo/AddInfo';

const MovieDetails = () => {
  const { movieId } = useParams(null);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState();

  useEffect(() => {
    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    if (!movieId) return;

    getMoviesById(movieId)
      .then(response => setMovie(response))
      .catch(err => setError(err.message));

    return () => {};
  }, [movieId]);

  return (
    <>
      <MovieInfo>
        {movie && configDetails && (
          <Poster
            src={`${configDetails.images.base_url}/${configDetails.images.logo_sizes[2]}/${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <MovieTextContainer>
          {movie && configDetails && <h2> {movie.original_title}</h2>}
          {movie && configDetails && (
            <p>User score: {Math.round(Number(movie.vote_average) * 10)}%</p>
          )}
          <h3>Overview</h3>
          {movie && configDetails && <p>{movie.overview}</p>}
          <h3>Genres</h3>
          {movie && configDetails && <Genres genresArr={movie.genres} />}
        </MovieTextContainer>
        {error && <p className="textEmpty">Sorry. {error} 😭</p>}
      </MovieInfo>

      <AddInfo />
      <Outlet />
    </>
  );
};

export default MovieDetails;

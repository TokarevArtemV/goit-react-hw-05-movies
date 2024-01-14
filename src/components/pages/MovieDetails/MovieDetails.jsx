import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  getConfigurationDetails,
  getMoviesById,
} from 'components/service/movie-service';
import { AddInfo } from 'components/AddInfo/AddInfo';
import { ButtonListMovie } from 'components/MovieList/MovieList.styled';
import MovieDatailsContent from './MovieDatailsContent';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams(null);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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
      <ButtonListMovie to={backLink.current}>Go back</ButtonListMovie>
      {movie && configDetails && (
        <MovieDatailsContent
          movie={movie}
          configDetails={configDetails}
          error={error}
        />
      )}
      <AddInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

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
  const [configDetails, setConfigDetails] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (configDetails === null) {
      setLoading(true);
      // getConfigurationDetails використовується для отримання данних з яких складається
      // повний шлях до зображень
      // `${configDetails.images.base_url}${configDetails.images.logo_sizes[1]}${cast.profile_path}`
      // https://developer.themoviedb.org/docs/image-basics
      getConfigurationDetails()
        .then(response => setConfigDetails(response))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }

    if (configDetails !== null && movieId !== null) {
      getMoviesById(movieId)
        .then(response => setMovie(response))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [configDetails, movieId]);

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
      {loading && <Loader />}
      <AddInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

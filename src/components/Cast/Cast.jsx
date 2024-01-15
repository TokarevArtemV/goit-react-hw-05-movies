import React, { useEffect, useState } from 'react';
import { CastItem, CastContainer } from './Cast.styled';
import {
  getCastsById,
  getConfigurationDetails,
} from 'components/service/movie-service';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams(null);
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!configDetails && movieId) {
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

    if (configDetails && movieId) {
      setLoading(true);
      getCastsById(movieId)
        .then(response => setCasts(response.cast))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [configDetails, movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {casts && configDetails && (
        <CastContainer>
          {casts.length === 0 && (
            <p>We don`t have any casts for this movie 😔</p>
          )}
          {casts.map((cast, i) => {
            return (
              <CastItem key={i}>
                <img
                  src={
                    cast.profile_path
                      ? `${configDetails.images.base_url}${configDetails.images.logo_sizes[1]}${cast.profile_path}`
                      : `${defaultImg}`
                  }
                  alt=""
                  height={180}
                />
                <p>{cast.original_name}</p>
              </CastItem>
            );
          })}
        </CastContainer>
      )}
      {loading && <Loader />}
      {error && <p className="textEmpty">Sorry. {error} 😭</p>}
    </>
  );
};

export default Cast;

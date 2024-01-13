import React, { useEffect, useState } from 'react';
import { CastItem, CastContainer } from './Cast.styled';
import {
  getCastsById,
  getConfigurationDetails,
} from 'components/service/movie-service';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams(null);
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [configDetails, setConfigDetails] = useState();

  useEffect(() => {
    getConfigurationDetails()
      .then(response => setConfigDetails(response))
      .catch(err => setError(err.message));
  }, []);

  useEffect(() => {
    getCastsById(movieId)
      .then(response => setCasts(response.cast))
      .catch(err => setError(err.message));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {casts.length > 0 && configDetails && (
        <CastContainer>
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
      {error && <p className="textEmpty">Sorry. {error} 😭</p>}
    </>
  );
};

export default Cast;

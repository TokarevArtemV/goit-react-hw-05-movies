import { getReviewsById } from 'components/service/movie-service';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsContainer, ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsById(movieId)
      .then(response => setReviews(response.results))
      .catch(err => setError(err.message));
  }, [movieId]);

  return (
    <>
      <ReviewsContainer>
        {reviews.map((review, i) => {
          return (
            <ReviewsItem key={i}>
              <h3>{`Author: ${review.author}`}</h3>
              <p>{review.content}</p>
            </ReviewsItem>
          );
        })}
      </ReviewsContainer>
      {error && <p className="textEmpty">Sorry. {error} 😭</p>}
    </>
  );
};

export default Reviews;

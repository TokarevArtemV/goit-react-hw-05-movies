import axios from 'axios';

export async function getConfigurationDetails() {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/configuration';
  axios.defaults.headers.common['Authorization'] = API_KEY;

  const { data } = await axios.get();

  return data;
}

export async function getMovies() {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day?';
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}

export async function getMoviesById(id) {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}

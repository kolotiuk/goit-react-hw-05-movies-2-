import axios from 'axios';

const API_KEY = '886a5e80a67d15e1eb52e12b03d8c581';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  return axios.get('/trending/movie/day').then(({ data }) => data.results);
};

export const getMovieDetails = id => {
  return axios.get(`/movie/${id}`).then(({ data }) => data);
};

export const getSearchMovie = q => {
  return axios.get(`/search/movie?query=${q}`).then(({ data }) => data.results);
};

export const getInfoAboutActors = id => {
  return axios.get(`/movie/${id}/credits?`).then(({ data }) => data.cast);
};

export const getReview = id => {
  return axios.get(`/movie/${id}/reviews?`).then(({ data }) => data.results);
};

import axios from "axios";
import { Movies } from "./entities/Movies.js";
import { Movie } from "./entities/Movie.js";
import config from "../../config/index.js";

const getPopular = async (page = 1) => {
  const result = await axios.get(
    `${config.BASE_URL}movie/popular?api_key=${config.API_KEY}&language=en-US&page=${page}`
  );
  return new Movies(result.data);
};

// const getMovieById = async (movieId) => {
const getMovieById = (movieId) => {
  return axios.get(
    `${config.BASE_URL}movie/${movieId}?api_key=${config.API_KEY}&language=en-US`
  );
};

export const axiosQuery = { getPopular, getMovieById };

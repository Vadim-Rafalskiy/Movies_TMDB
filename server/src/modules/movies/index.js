import axios from "axios";
import { Movies } from "./entities/Movies.js";
import config from "../../config/index.js";

const getPopular = async (page = 1, language) => {
  const result = await axios.get(
    `${config.BASE_URL}movie/popular?api_key=${config.API_KEY}&language=${language}&page=${page}`
  );
  return new Movies(result.data);
};

const getMovieById = (movieId, language) => {
  return axios.get(
    `${config.BASE_URL}movie/${movieId}?api_key=${config.API_KEY}&language=${language}`
  );
};

export const axiosQuery = { getPopular, getMovieById };

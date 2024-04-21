import axios from "axios";
import { Movies } from "./entities/Movies.js";
import { Genres } from "./entities/Genres.js";
import config from "../../config/index.js";
import "dotenv/config";

const getPopular = async (page = 1, language) => {
  const result = await axios.get(
    `${config.BASE_URL}movie/popular?api_key=${process.env.API_KEY}&language=${language}&page=${page}`
  );
  return new Movies(result.data);
};

const getGenres = async (language) => {
  const result = await axios.get(
    `${config.BASE_URL}genre/movie/list?api_key=${process.env.API_KEY}&language=${language}`
  );
  return new Genres(result.data);
};

const getMovieById = (movieId, language) => {
  return axios.get(
    `${config.BASE_URL}movie/${movieId}?api_key=${process.env.API_KEY}&language=${language}`
  );
};

export const axiosQuery = { getPopular, getMovieById, getGenres };

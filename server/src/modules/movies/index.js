import axios from "axios";
import { Movies } from "./entities/Movies.js";
import { Genres } from "./entities/Genres.js";
import { KeyWords } from "./entities/KeyWords.js";
import config from "../../config/index.js";
import "dotenv/config";

const getFilteredMovies = async (filters, language) => {
  const {
    page,
    primary_release_year,
    sortDirection,
    sort_by,
    with_genres,
    with_keywords,
    with_runtime_gte,
    with_runtime_lte,
  } = filters;

  const params = new URLSearchParams({
    page: page.toString(),
  });

  if (primary_release_year) {
    params.append("primary_release_year", primary_release_year);
  }

  if (with_keywords?.length) {
    params.append("with_keywords", with_keywords);
  }

  if (with_genres?.length) {
    params.append("with_genres", with_genres);
  }

  if (with_runtime_gte) params.append("with_runtime_gte", with_runtime_gte);

  if (with_runtime_lte) params.append("with_runtime_lte", with_runtime_lte);

  if (sort_by && sortDirection) {
    params.append("sort_by", `${sort_by}.${sortDirection}`);
  }

  if (language) {
    params.append("language", language);
  }

  const query = params;

  const result = await axios.get(
    `${config.BASE_URL}discover/movie?api_key=${process.env.API_KEY}&${query}`
  );

  //-------------------------------console.log----------------------

  // console.log(
  //   "query--+++",
  //   `${config.BASE_URL}discover/movie?api_key=${process.env.API_KEY}&${query}`
  // );

  //------------------------------/console.log-------------------------

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

const getKeyWords = async (keyWordInput, page) => {
  const result = await axios.get(
    `${config.BASE_URL}search/keyword?api_key=${process.env.API_KEY}&query=${keyWordInput}&page=${page}`
  );
  return new KeyWords(result.data);
};

export const axiosQuery = {
  getKeyWords,
  getMovieById,
  getGenres,
  getFilteredMovies,
};

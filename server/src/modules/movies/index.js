import axios from "axios";
import { Movies } from "./entities/Movies.js";
import config from "../../config/index.js";

const getPopular = async (page = 1) => {
  const result = await axios.get(
    `${config.BASE_URL}movie/popular?api_key=${config.API_KEY}&language=en-US&page=${page}`
  );
  return new Movies(result.data);
};

export const axiosQuery = { getPopular };

import { axiosQuery } from "../modules/movies/index.js";
import { Movie } from "../modules/movies/entities/Movie.js";

export async function movies(parent, args) {
  const data = await axiosQuery.getPopular(args.page);
  return data;
}

export async function moviesByIds(parent, { ids }) {
  const requests = ids.map((id) => axiosQuery.getMovieById(id));
  const data = await Promise.all(requests);

  const movies = data.map(({ data }) => new Movie(data));

  return movies;
}

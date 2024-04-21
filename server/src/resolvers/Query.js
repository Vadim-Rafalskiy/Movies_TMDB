import { axiosQuery } from "../modules/movies/index.js";
import { Movie } from "../modules/movies/entities/Movie.js";

export async function movies(parent, args, { locale }) {
  const data = await axiosQuery.getPopular(args.page, locale);

  return data;
}

export async function genres(parent, args, { locale }) {
  const data = await axiosQuery.getGenres(locale);

  return data;
}

export async function moviesByIds(parent, { ids }, { locale }) {
  const requests = ids.map((id) => axiosQuery.getMovieById(id, locale));
  const data = await Promise.all(requests);

  const movies = data.map(({ data }) => new Movie(data));

  return movies;
}

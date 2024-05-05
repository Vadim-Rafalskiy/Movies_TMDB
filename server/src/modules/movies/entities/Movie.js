import { format } from "date-fns";
import config from "../../../config/index.js";
import { fileURLToPath } from "url";

import path from "path";

// Отримання шляху до поточного файлу
const __filename = fileURLToPath(import.meta.url);
// Отримання шляху до каталогу поточного файлу
export const __dirname = path.dirname(__filename);

export class Movie {
  constructor(movie) {
    this.movie = movie;
    this.id = movie.id;
    this.title = movie.title;
    if (!movie.poster_path) {
      this.posterPath = undefined;
    } else {
      this.posterPath = `${config.IMAGE_BASE_PATH}${movie.poster_path}`;
    }
    this.adult = movie.adult;
    this.overview = movie.overview;
    this.originalLanguage = movie.original_language;
    this.originalTitle = movie.original_title;
    this.backdropPath = `${config.IMAGE_BASE_PATH}${movie.backdrop_path}`;
    this.popularity = movie.popularity;
    this.voteCount = movie.vote_count;
    this.video = movie.video;
    this.voteAverage = movie.vote_average;
    this.runtime = movie.runtime;
    this.genres = movie.genres;
  }
  releaseDate(params) {
    try {
      const date = params.format
        ? format(new Date(this.movie.release_date), params.format)
        : this.movie.release_date;

      return date;
    } catch (e) {
      console.error(e);
      return this.movie.release_date?this.movie.release_date:'unknown date';
    }
  }
}

import { Genre } from "./Genre.js";

export class Genres {
  constructor(results) {
    this.results = results.genres.map((genre) => new Genre(genre));
  }
}

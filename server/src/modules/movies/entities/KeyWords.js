import { KeyWord } from "./KeyWord.js";

export class KeyWords {
  constructor(keyWords) {
    this.page = keyWords.page;
    this.totalResults = keyWords.total_results;
    this.totalPages = keyWords.total_pages;
    this.results = keyWords.results.map((keyWord) => new KeyWord(keyWord));
  }
}

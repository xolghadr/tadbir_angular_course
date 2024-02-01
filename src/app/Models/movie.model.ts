export class MovieModel {
  constructor(
    public id: string,
    public title: string,
    public imdb_rating: number,
    public poster: string,
    public imdb_id: string,
    public country: string,
    public year: number
  ) {}

  static get Empty(): MovieModel {
    return new MovieModel('0', '', 0, '', '', '', 0);
  }
}

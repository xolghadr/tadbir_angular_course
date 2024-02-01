export class MovieModel {
  constructor(
    public id: string,
    public title: string,
    public imdb_rating: number,
    public poster: string
  ) {}

  static get Empty(): MovieModel {
    return new MovieModel('0', '', 0, '');
  }
}

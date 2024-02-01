export class MovieDetailsModel {
  constructor(
    public id: string,
    public title: string,
    public imdb_rating: number,
    public released: string,
    public poster: string,
    public country: string,
    public plot: string,
    public runtime: string,
    public director: string,
    public writer: string,
    public metascore: number,
    public actors: string,
    public genres: string[]
  ) {}

  static get Empty(): MovieDetailsModel {
    return new MovieDetailsModel('0', '', 0, '', '', '', '', '', '', '', 0, '', []);
  }
}

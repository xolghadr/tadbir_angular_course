export class MovieModel {
  constructor(
    public id: string,
    public title: string,
    public imdb_rating: number,
    public year: number,
    public poster: string,
    public genres: string[]
  ) {}
}

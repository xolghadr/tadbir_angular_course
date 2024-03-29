import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetailsModel, MovieModel, PagedMovieList } from 'src/app/Models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<PagedMovieList> {
    return this.http.get<PagedMovieList>(
      'https://moviesapi.ir/api/v1/movies?page=1'
    );
  }
  getGenreMovieList(genreId: string): Observable<PagedMovieList> {
    return this.http.get<PagedMovieList>(
      `https://moviesapi.ir/api/v1/genres/${genreId}/movies?page=1`
    );
  }
  getMovieById(movieId: string): Observable<MovieDetailsModel> {
    return this.http.get<MovieDetailsModel>(
      `https://moviesapi.ir/api/v1/movies/${movieId}`
    );
  }
  saveMovie(movieModel: MovieModel) {
    return this.http.post<MovieModel>(
      `https://moviesapi.ir/api/v1/movies`,
      movieModel
    );
  }
}

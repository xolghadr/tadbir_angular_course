import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedMovieList } from 'src/app/Models';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<PagedMovieList> {
    return this.http.get<PagedMovieList>('https://moviesapi.ir/api/v1/movies?page=1');
  }
}

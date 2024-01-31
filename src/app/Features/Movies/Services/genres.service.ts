import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreModel } from 'src/app/Models';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private http: HttpClient) {}

  getGenresList(): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>(
      'https://moviesapi.ir/api/v1/genres'
    );
  }
}

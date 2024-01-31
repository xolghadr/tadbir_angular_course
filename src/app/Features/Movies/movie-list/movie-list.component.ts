import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { MovieModel } from 'src/app/Models';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: MovieModel[] = [];
  constructor(
    public movieService: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const genreId = params.get('genreId');
          if (genreId) return this.movieService.getGenreMovieList(genreId);
          else return this.movieService.getMovieList();
        })
      )
      .subscribe({
        next: (movieList) => {
          this.movies = movieList.data;
        },
      });
  }
}

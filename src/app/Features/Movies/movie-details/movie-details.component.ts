import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, throwError } from 'rxjs';
import { MoviesService } from '../Services/movies.service';
import { GenreModel, MovieDetailsModel, MovieModel } from 'src/app/Models';
import { GenresService } from '../Services/genres.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movie: MovieDetailsModel = MovieDetailsModel.Empty;
  genres: GenreModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router,
    genreService: GenresService
  ) {
    genreService.getGenresList().subscribe((list) => {
      this.genres = list;
    });
  }
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const movieId = params.get('movieId');
          if (movieId) return this.movieService.getMovieById(movieId);
          else {
            this.router.navigate(['/', 'movies']);
            return of(MovieDetailsModel.Empty);
          }
        })
      )
      .subscribe({
        next: (movieData) => {
          this.movie = movieData;
          console.log(this.movie);
        },
      });
  }

  getGenreId(genreName: string): string | undefined {
    return this.genres.find(g => g.name === genreName)?.id;
  }
}

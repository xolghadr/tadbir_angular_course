import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { Movie } from 'src/app/Models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  constructor(public movieService: MoviesService) {}
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe({
      next: (movieList) => {
        this.movies = movieList.data;
      },
    });
  }
}

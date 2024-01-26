import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent {
  @Input() movie!: Movie;

  rateMovie(movieId: string,  rating: number) {
    console.log(movieId, ':', rating );
  }
}

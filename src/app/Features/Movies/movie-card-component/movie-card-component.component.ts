import { Component, Input } from '@angular/core';
import { MovieModel } from 'src/app/Models';

@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styleUrls: ['./movie-card-component.component.css'],
})
export class MovieCardComponentComponent {
  @Input() movie!: MovieModel;

  rateMovie(movieId: string, rating: number) {
    console.log(movieId, ':', rating);
  }
  url(url: string){
    return `url(${url})`;
  }
}

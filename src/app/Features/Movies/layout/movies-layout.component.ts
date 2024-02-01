import { Component, OnInit } from '@angular/core';
import { GenreModel } from 'src/app/Models';
import { GenresService } from '../Services/genres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './movies-layout.component.html',
  styleUrl: './movies-layout.component.css',
})
export class MoviesLayoutComponent implements OnInit {
  genreList: GenreModel[] = [];
  activeGenre: string | null = '0';
  constructor(
    private genreService: GenresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.genreService.getGenresList().subscribe({
      next: (data) => (this.genreList = data),
    });
  }

  onActivateRoute() {
    const activatedRoute = this.route.firstChild;
    activatedRoute!.paramMap.subscribe(
      (params) => (this.activeGenre = params.get('genreId'))
    );
  }
}

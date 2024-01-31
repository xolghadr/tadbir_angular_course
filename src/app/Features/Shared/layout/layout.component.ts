import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GenreModel } from 'src/app/Models';
import { GenresService } from '../../Movies/Services/genres.service';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('sideNav') public sideNav!: MatSidenav;
  genreList: GenreModel[] = [];
  constructor(private genreService: GenresService, private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.genreService.getGenresList().subscribe({
      next: (data) => (this.genreList = data),
    });

    this.route.paramMap.subscribe(params =>  console.log(params.get('genreId')));
    this.route.params.subscribe((params) => {
         if (params['genreId'] === '1') {
             this.sideNav.open();
         }
    });
  }
}

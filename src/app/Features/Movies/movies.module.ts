import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesLayoutComponent } from './layout/movies-layout.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponentComponent } from './movie-card-component/movie-card-component.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    RatingComponentComponent,
    MovieCardComponentComponent,
    MovieListComponent,
    MoviesLayoutComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule
  ],
})
export class MoviesModule {
  public opened = true;
  constructor(library: FaIconLibrary) {
    library.addIcons(faStar);
  }
}

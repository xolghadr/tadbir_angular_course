import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesLayoutComponent } from './layout/movies-layout.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponentComponent } from './movie-card-component/movie-card-component.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile, faSave, faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RatingComponentComponent,
    MovieCardComponentComponent,
    MovieListComponent,
    MoviesLayoutComponent,
    MovieDetailsComponent,
    NewMovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class MoviesModule {
  public opened = true;
  constructor(library: FaIconLibrary) {
    library.addIcons(faStar);
    library.addIcons(faSave);
    library.addIcons(faFile);
  }
}

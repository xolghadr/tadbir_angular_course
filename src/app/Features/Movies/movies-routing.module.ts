import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesLayoutComponent } from './layout/movies-layout.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesLayoutComponent,
    children: [
      { path: '', component: MovieListComponent, pathMatch: 'full' },
      {
        path: 'genres/:genreId',
        component: MovieListComponent,
      },{
        path: 'detail/:movieId',
        component: MovieDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}

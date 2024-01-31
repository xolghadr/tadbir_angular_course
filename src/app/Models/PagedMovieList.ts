import { MovieModel } from "./movie.model";

export interface PagedMovieList {
  data: MovieModel[];
  metadata: {
    current_page: string;
    per_page: number;
    page_count: number;
    total_count: number;
  }
}

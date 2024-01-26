import { Movie } from "./Movie";

export interface PagedMovieList {
  data: Movie[];
  metadata: {
    current_page: string;
    per_page: number;
    page_count: number;
    total_count: number;
  }
}

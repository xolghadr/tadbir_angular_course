import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.css',
})
export class NewMovieComponent {
  movieForm!: FormGroup;
  constructor(
    fb: FormBuilder,
    private movieService: MoviesService,
    private router: Router
  ) {
    this.movieForm = fb.group({
      title: new FormControl('', Validators.required),
      imdb_id: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      poster: new FormControl(''),
      imdb_rating: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    });
  }

  rateMovie(rating: number) {
    this.movieForm.patchValue({ imdb_rating: rating });
  }

  handleInputChange(e: any) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();

    reader.onload = (ev: ProgressEvent) => {
      if (reader.result) {
        let fileAsBase64 = reader.result.toString();
        const base64Flag = ';base64,';
        const startOfBase64String =
          fileAsBase64.indexOf(base64Flag) + base64Flag.length;
        const lengthOfFileString = fileAsBase64.length;
        this.movieForm.patchValue({
          poster: fileAsBase64.substring(
            startOfBase64String,
            lengthOfFileString
          ),
        });
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    console.log(this.movieForm.getRawValue());
    this.movieService.saveMovie(this.movieForm.value).subscribe((data) => {
      this.router.navigate(['/', 'movies', 'detail', data.id]);
    });
  }
}

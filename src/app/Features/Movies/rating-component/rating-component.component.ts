import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.css'],
})
export class RatingComponentComponent {
  private _rating: number = 0;
  @Input() get rating(): number {
    return this._rating;
  }
  set rating(value: number) {
    this._rating = Math.floor(value);
  }

  @Input() entityId!: string;
  @Output() selectionChanged: EventEmitter<number> = new EventEmitter<number>();
  stars: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  onStarClick() {
    this.selectionChanged.emit(this.rating);
  }
}

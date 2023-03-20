import { Component } from '@angular/core';
import { genres } from '../db';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent {
  genres: string[] = []
  ngOnInit() {
    this.genres = genres;
  }
}

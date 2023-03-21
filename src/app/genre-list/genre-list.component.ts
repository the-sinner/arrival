import { Component } from '@angular/core';
import { genreList, genres } from '../db';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent {
  genres: any;
  cardLink = {
    'color': 'inherit',
    'text-decoration': 'none'
  }
  // genre:any;
  ngOnInit() {
    this.genres = genres;
    // this.genre = genres;
  }
}

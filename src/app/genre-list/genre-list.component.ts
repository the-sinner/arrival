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
    window.scroll(0,0);
    this.genres = genres;
    // this.genre = genres;
  }
}

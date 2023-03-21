import { Component } from '@angular/core';
import { genres } from '../db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardLink = {
    'color': 'inherit',
    'text-decoration': 'none'
  }
  genres:any;
  ngOnInit() {
    window.scroll(0,0);
    this.genres = genres
  }
}

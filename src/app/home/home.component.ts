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
    this.genres = genres
  }
}

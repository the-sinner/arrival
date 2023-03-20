import { Component } from '@angular/core';

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
  items = [
    {
      name: 'Action',
      value: 'action',
      description: 'Action Quote',
      imageUrl: 'assets/images/action.jpg'
    },
    {
      name: 'Sci-Fi',
      value: 'scifi',
      description: 'Scifi quote',
      imageUrl: 'assets/images/scifi.jpg'
    },
    {
      name: 'Fantasy',
      value: 'fantasy',
      description: 'Fantasy quote',
      imageUrl: 'assets/images/fantasy.jpg'
    },
    {
      name: 'Adventure',
      value: 'adventure',
      description: 'Adventure quote',
      imageUrl: 'assets/images/adventure.jpg'
    },
  ];

}

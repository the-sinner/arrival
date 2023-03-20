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
      description: 'This is item 1',
      imageUrl: 'assets/images/action.jpg'
    },
    {
      name: 'Sci-Fi',
      value: 'scifi',
      description: 'This is item 2',
      imageUrl: 'assets/images/scifi.jpg'
    },
    {
      name: 'Fantasy',
      value: 'fantasy',
      description: 'This is item 3',
      imageUrl: 'assets/images/fantasy.jpg'
    },
    {
      name: 'Adventure',
      value: 'adventure',
      description: 'This is item 4',
      imageUrl: 'assets/images/adventure.jpg'
    },
  ];

}

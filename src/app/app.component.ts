import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService) {
    this.user = this.userService.currentUser;
    // console.log(this.user)
  }

  user: string = ""
  routerLinkActiveOptions = { exact: true };

}

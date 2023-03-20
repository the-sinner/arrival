import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
constructor(private router: Router, private userService: UserService){}
  model: any = {};

  onSubmit() {
    this.userService.isRegistered = true;
    console.log(this.model);
    alert("Successfully Registered");
    this.router.navigate(['/']);
  }

}

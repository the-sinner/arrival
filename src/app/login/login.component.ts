import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../types';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private userService : UserService) { }

  // userData: User[] = [{ "email": "abc@xyz.com", "password": "abc" }]
  password: string = "";
  email: string = "";

  onSubmit(form: NgForm) {
    // Check the email and password
    if (this.email === 'admin' && this.password === 'admin') {
      this.userService.currentUser = this.email;
      this.userService.logIn();
      alert('Login successful!');
      this.router.navigate(['/']);
    } else {
      alert('Login failed!');
    }
  }
}

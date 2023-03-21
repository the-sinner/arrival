import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit(form: NgForm) {
    console.log(this.model);
    alert("Successfully Registered");
    this.userService.register();
    this.router.navigate(['/']);
  }

}

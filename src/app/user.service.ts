import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  currentUser: string = "";
  isLoggedIn: boolean = false;
  isRegistered: boolean = false;

  loggedIn():boolean {
    return this.isLoggedIn || this.isRegistered;
  }
  
}

import { AuthService } from './../auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  login() {
    // 1. Enable Google Signin in sign in method on firebase console
    // 2. Add the following line 
    this.authService.login();
  }
  
}

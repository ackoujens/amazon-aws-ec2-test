// Login prompt logic
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent {

  public user: User;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  // Checks if a username and password is entered
  validateLogin() {
    if(this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(
        result => {
          console.log('result is ', result);
      }, error => {
        console.log('error is', error);
      });
    } else {
      alert('enter user name and password');
    }
  }

}
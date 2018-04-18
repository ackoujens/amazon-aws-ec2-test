// Login prompt data service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  // Pushes username and password to user login API
  validateLogin(user: User) {
    return this.http.post('/api/user/login', {
      username: user.username,
      password: user.password
    })
  }

}

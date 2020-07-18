import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenService {
  private iss = {
 
<<<<<<< HEAD
    // login: 'http://testenv.hamorah.com/backend/public/api/adminLogin',
    // signup: 'http://testenv.hamorah.com/backend/public/api/signup'
=======
    // login: 'http://sabiogun.testenv.digittechnologies.org/backend/public/api/adminLogin',
    // signup: 'http://sabiogun.testenv.digittechnologies.org/backend/public/api/signup'
>>>>>>> 2eea486076a2a1edfe6a04fa1ae99ebf029510b2
    
    login: 'http://localhost/sce-platform2/backend/public/api/adminLogin',

    signup: 'http://localhost/sce-platform2/backend/public/api/signup'

    
    // login: environment.login,
    // signup: environment.signup,
    
  };

  constructor() { }

  handle(token) {
    this.set(token);
    // console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}

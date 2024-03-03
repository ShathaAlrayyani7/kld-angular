import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService{
  loginForm: { [key: string]: any } = {};
  signUpForm: { [key: string]: any } = {};

  isLogin = new BehaviorSubject<boolean>(true);
  isLoggedIn = new BehaviorSubject<boolean>(true);
  isPassword = new BehaviorSubject<boolean>(true);
  isPassword2 = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {}

  handleFormSwitchToLogin() {
    this.isLoggedIn.next(false);
    this.isLogin.next(true);
    console.log('isLoggedIn', this.isLoggedIn.value);
    this.router.navigate([''])
  }

  handleFormSwitchToSighUp() {
    this.isLoggedIn.next(false);
    this.isLogin.next(false);
    console.log('isLogin', this.isLogin.value);
    this.router.navigate([''])
  }

  onSignIn() {
    this.isLoggedIn.next(true);
    console.log('you are logged in');
  }

  onSignOut() {
    this.isLoggedIn.next(false);
    this.router.navigate(['dashboard'])
  }

  onSignUp() {
    this.isLogin.next(true);
    // Your sign-up logic
  }

  onSeePassword() {
    this.isPassword.next(!this.isPassword.value);
  }

  onSeePassword2() {
    this.isPassword2.next(!this.isPassword2.value);
  }

  resetPasswordFlags() {
    this.isPassword.next(true);
    this.isPassword2.next(true);
  }
}

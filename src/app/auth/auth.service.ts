import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginForm: { [key: string]: any } = {};
  signUpForm: { [key: string]: any } = {};

  isLogin = new BehaviorSubject<boolean>(true);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isPassword = new BehaviorSubject<boolean>(true);
  isPassword2 = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {}

  handleFormSwitchToLogin() {
    this.isLoggedIn.next(false);
    this.isLogin.next(true);
    this.router.navigate(['auth'])
  }

  handleFormSwitchToSighUp() {
    this.isLoggedIn.next(false);
    this.isLogin.next(false);
    this.router.navigate(['auth'])
  }

  onSignIn() {
    this.isLoggedIn.next(true);
    this.router.navigate(['my-orders'])
  }

  onSignOut() {
    this.isLoggedIn.next(false);
    this.router.navigate(['auth'])
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

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [LoginComponent, SignUpComponent, CommonModule],
})
export class AuthComponent implements OnInit {
  isLogin: Observable<boolean> = this.authService.isLogin;
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLogin = this.authService.isLogin;
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}

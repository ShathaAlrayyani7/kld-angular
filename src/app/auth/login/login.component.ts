import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  isPassword: Observable<boolean> = this.authService.isPassword;
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  loginFormLabels = [
    {
      label: 'اسم المستخدم',
      name: 'userName',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  handleSignUpClick() {
    this.authService.handleFormSwitchToSighUp();
  }

  handleLogin() {
    if (this.loginForm.valid) {
      this.authService.onSignIn();
    }
  }

  handleOnSeePassword() {
    this.authService.onSeePassword();
  }
}

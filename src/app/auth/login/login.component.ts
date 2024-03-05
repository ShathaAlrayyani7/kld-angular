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
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.email]),
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

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (control?.hasError('required')) {
      return 'هذا الحقل مطلوب';
    } else if (control?.hasError('email')) {
      return 'البريد الإلكتروني غير صالح';
    }
    return '';
  }
}


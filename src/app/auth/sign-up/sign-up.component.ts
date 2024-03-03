import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit, OnChanges, OnDestroy {
  isPassword: Observable<boolean> = this.authService.isPassword;
  isPassword2: Observable<boolean> = this.authService.isPassword2;
  signUpFormLabels = [
    {
      label: 'اسم الجهة التدريبية',
      name: 'userName',
    },
    {
      label: 'رقم جوال ممثل الجهة',
      name: 'phoneNum',
    },
    {
      label: 'البريد الإلكتروني',
      name: 'email',
    },
  ];

  signUpPswFields = [
    {
      label: 'كلمة المرور',
      name: 'password',
      isPassword: this.isPassword,
    },
    {
      label: 'تأكيد كلمة المرور',
      name: 'psw2',
      isPassword: this.isPassword2,
    },
  ];

  signUpForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNum: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    psw2: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService) {}
  ngOnDestroy() {
    this.authService.resetPasswordFlags()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);

    this.signUpPswFields = [
      {
        label: 'كلمة المرور',
        name: 'password',
        isPassword: this.isPassword,
      },
      {
        label: 'تأكيد كلمة المرور',
        name: 'psw2',
        isPassword: this.isPassword2,
      },
    ];
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNum: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      psw2: new FormControl(null, [Validators.required]),
    });
  }

  handleLoginClick() {
    this.authService.handleFormSwitchToLogin();
  }

  handleSighUp() {
    this.authService.onSignUp();
  }

  handleOnSeePassword() {
    this.authService.onSeePassword();
    console.log();
    
  }

  handleOnSeePsw2() {
    this.authService.onSeePassword2();
  }
}

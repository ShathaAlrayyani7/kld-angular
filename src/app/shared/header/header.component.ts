import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  constructor(private authService: AuthService, private router: Router) {}

  handleLoginClick() {
    this.authService.handleFormSwitchToLogin();
    this.router.navigate(['auth'])
  }

  handleSignUpClick() {
    this.authService.handleFormSwitchToSighUp();
    this.router.navigate(['auth'])
  }
}

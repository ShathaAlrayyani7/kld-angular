import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  navLinks = [
    {
      path:'home',
      label: 'الرئيسية',
      src:'./assets/icons/home.svg#home',
    },
    {
      path:'dashboard',
      label: 'لوحة المعلومات',
      src:'/assets/icons/dashboard.svg#dashboard',
    },
    {
      path:'my-orders',
      label: 'طلباتي',
      src:'./assets/icons/orders.svg#orders',
    },
  ]
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  constructor(private router: Router, private authService: AuthService) {}

  onNavigate(path: string) {
    this.router.navigate([path]);
  }
}

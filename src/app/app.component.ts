import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MyOrdersModule } from './my-orders/my-orders.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    AuthComponent,
    HeaderComponent,
    CommonModule,
    SharedModule,
    DashboardModule,
    MyOrdersModule,
  ],
})
export class AppComponent implements OnInit {
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('isLoggedIn: ', this.isLoggedIn);
  }
}

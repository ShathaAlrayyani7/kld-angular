import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
  {
    path: 'my-orders',
    loadChildren: () =>
      import('./my-orders/my-orders.module').then((m) => m.MyOrdersModule),
    canActivate: [authGuard],
  },
  {
    path: 'home',
    // pathMatch: 'full',
    loadChildren: ()=> import('./main-page/main-page.module').then((m)=>m.MainPageModule),
    canActivate: [authGuard],
    // redirectTo:'/auth',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [authGuard],
  },
];

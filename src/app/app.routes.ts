import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
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
    loadChildren: ()=> import('./main-page/main-page.module').then((m)=>m.MainPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: 'auth' }
];

import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { MyOrdersModule } from './my-orders/my-orders.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
    routes,
    withPreloading(PreloadAllModules)
  ), provideAnimationsAsync(), SharedModule, DashboardModule, MyOrdersModule , AuthModule],
};

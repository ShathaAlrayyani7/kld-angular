import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: AuthComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class AuthModule {}

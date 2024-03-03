import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  providers: [DashboardComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
})
export class DashboardModule {}

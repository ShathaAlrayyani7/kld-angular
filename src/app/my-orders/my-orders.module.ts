import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MyOrdersComponent } from './my-orders.component';

const routes: Routes = [{ path: '', component: MyOrdersComponent }];
@NgModule({
  providers: [MyOrdersComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [],
})
export class MyOrdersModule {}

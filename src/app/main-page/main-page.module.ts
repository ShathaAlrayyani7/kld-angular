import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [{ path: '', component: MainPageComponent }];
@NgModule({
  providers: [MainPageComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
})
export class MainPageModule {}

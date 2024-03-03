import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltrationComponent } from './filtration/filtration.component';

@NgModule({
  imports: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    TableComponent,
    FiltrationComponent,
  ],
  providers: [CommonModule, NgxPaginationModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    TableComponent,
    FiltrationComponent,
  ],
})
export class SharedModule {}

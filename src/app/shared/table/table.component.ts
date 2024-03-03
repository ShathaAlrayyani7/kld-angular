import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-with-pagination',
  styleUrl: 'table.component.scss',
  templateUrl: 'table.component.html',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    NgxPaginationModule,
  ],
})
export class TableComponent {
  totalItems: number = ELEMENT_DATA.length ;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  displayedColumns: string[] = [
    'view',
    'status',
    'date',
    'orderType',
    'orderNum',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  tableColData = [
    {
      colName: 'view',
      label: '',
    },
    {
      colName: 'status',
      label: 'حالة الطلب',
    },
    {
      colName: 'date',
      label: 'تاريخ الطلب',
    },
    {
      colName: 'orderType',
      label: 'نوع الطلب',
    },
    {
      colName: 'orderNum',
      label: 'رقم الطلب',
    },
  ];

  pageChanged(event: any): void {
    console.log('event: ', event);
    this.currentPage = event;
    // Implement logic to fetch data for the current page
  }
}

export interface PeriodicElement {
  status: string;
  view: number;
  date: Date;
  orderType: string;
  orderNum: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'طلب جديد',
    view: 1,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'تمت الموافقة من أمين اللجنة',
    view: 2,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'في انتظار تصويت اللجنة',
    view: 3,
  },
  {
    date: new Date(),
    orderType: 'الحصول على أحد البرامج التدريبية المقدمة من المركز',
    orderNum: 13456789876544,
    status: 'طلب تعديل من أمين اللجنة',
    view: 4,
  },
  {
    date: new Date(),
    orderType: 'الحصول على أحد البرامج التدريبية المقدمة من المركز',
    orderNum: 13456789876544,
    status: 'تمت الموافقة من أمين اللجنة',
    view: 5,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'طلب جديد',
    view: 1,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'تمت الموافقة من أمين اللجنة',
    view: 2,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'في انتظار تصويت اللجنة',
    view: 3,
  },
  {
    date: new Date(),
    orderType: 'الحصول على أحد البرامج التدريبية المقدمة من المركز',
    orderNum: 13456789876544,
    status: 'طلب تعديل من أمين اللجنة',
    view: 4,
  },
  {
    date: new Date(),
    orderType: 'الحصول على أحد البرامج التدريبية المقدمة من المركز',
    orderNum: 13456789876544,
    status: 'تمت الموافقة من أمين اللجنة',
    view: 5,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'طلب جديد',
    view: 1,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'تمت الموافقة من أمين اللجنة',
    view: 2,
  },
  {
    date: new Date(),
    orderType: 'إعتماد برنامج تدريبي في مجال كفاءة الطاقة',
    orderNum: 13456789876544,
    status: 'في انتظار تصويت اللجنة',
    view: 3,
  },
  {
    date: new Date(),
    orderType: 'الحصول على أحد البرامج التدريبية المقدمة من المركز',
    orderNum: 13456789876544,
    status: 'طلب تعديل من أمين اللجنة',
    view: 4,
  },
  {
    date: new Date(),
    orderType: 'الحصول على أحد البرامج التدريبية المقدمة من المركز',
    orderNum: 13456789876544,
    status: 'تمت الموافقة من أمين اللجنة',
    view: 5,
  },
];

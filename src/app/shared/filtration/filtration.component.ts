import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrl: './filtration.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class FiltrationComponent {
  status = new FormControl('');
  orderLang = new FormControl('');
  orderType = new FormControl('');
  searchInput = new FormControl('');

  searchList = [
    {
        value: this.orderLang ,
        options:['English', 'Arabic'],
        placeholder:'لغة البرنامج',
    },
    {
        value: this.status,
        options:['طلب جديد', 'تمت الموافقة من أمين اللجنة', 'في انتظار تصويت اللجنة', 'طلب تعديل من أمين اللجنة'],
        placeholder:'حالة الطلب',
    },
    {
        value: this.orderType ,
        options:['إعتماد برنامج تدريبي في مجال كفاءة الطاقة', 'الحصول على أحد البرامج التدريبية المقدمة من المركز'],
        placeholder:'نوع الطلب',
    }
  ]

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
}

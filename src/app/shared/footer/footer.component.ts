import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  items = [
    {
      title: 'تواصل معنا',
      list: ['info@seec.gov.sa', '920002742', 'الدعم الفني'],
    },
    {
      title: 'روابط مهمة',
      list: ['المركز السعودي لكفاءة الطاقة', 'منصة التدريب', 'الأسئلة الشائعة'],
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  navLinks = [
    {
      path:'',
      label: 'الرئيسية',
      src:'',
    },
    {
      path:'dashboard',
      label: 'لوحة المعلومات',
      src:'',
    },
    {
      path:'my-orders',
      label: 'طلباتي',
      src:'',
    },
  ]

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    console.log('active route', this.route);
    console.log('router: ', this.router);
  }

  onNavigate(path: string) {
    this.router.navigate([path]);
  }
}

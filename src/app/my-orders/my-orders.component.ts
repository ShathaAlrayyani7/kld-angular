import { Component } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

@Component({
    selector: 'app-my-orders',
    standalone: true,
    templateUrl: './my-orders.component.html',
    styleUrl: './my-orders.component.scss',
    imports: [SharedModule]
})
export class MyOrdersComponent {

}

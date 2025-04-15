import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/components/header/header.component';


@Component({
  selector: 'app-dashboard-super-admin',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard-super-admin.component.html',
  styleUrl: './dashboard-super-admin.component.scss'
})
export class DashboardSuperAdminComponent {

}

import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [ButtonModule, HeaderComponent, FooterComponent,BadgeModule],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss'
})
export class StudentLayoutComponent {

}

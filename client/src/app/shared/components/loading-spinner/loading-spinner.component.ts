import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {

}

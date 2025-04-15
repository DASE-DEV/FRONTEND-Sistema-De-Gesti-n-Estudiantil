import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    InputGroupModule,
    AvatarModule,
    BadgeModule,
    OverlayPanelModule,
    MenuModule,
    FormsModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  sidebarVisible: boolean = false;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}

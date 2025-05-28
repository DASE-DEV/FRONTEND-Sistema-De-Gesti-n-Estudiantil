import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    InputGroupModule,
    AvatarModule,
    BadgeModule,
    OverlayPanelModule,
    MenuModule,
    FormsModule,
    DialogModule,
    DividerModule
  
   
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() tooltip?: string;
  sidebarVisible: boolean = false;
  unreadNotifications: number = 3;
  userMenuItems: MenuItem[] = [];
  visible: boolean = false;

 
  irAMiPerfil(overlay: OverlayPanel) {
    overlay.hide(); // Cierra el overlay
    // Aquí rediriges o haces lo que quieras
    console.log('Ir a Mi Perfil');
  }

  cerrarSesion(overlay: OverlayPanel) {
    overlay.hide(); // Cierra el overlay
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
  }

  
  notifications: any[] = [
    {
      icon: 'pi pi-envelope',
      title: 'Nuevo mensaje',
      message: 'Has recibido un mensaje de Juan Pérez',
      time: 'Hace 10 minutos',
      read: false
    },
    {
      icon: 'pi pi-calendar',
      title: 'Reunión programada',
      message: 'Reunión de equipo a las 15:00',
      time: 'Hace 1 hora',
      read: false
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Tarea completada',
      message: 'La tarea "Actualizar documentación" ha sido completada',
      time: 'Hace 3 horas',
      read: false
    }
  ];
  
  ngOnInit() {
    // Inicializar menú de usuario
    this.userMenuItems = [
      {
        label: 'Mi Perfil',
        icon: 'pi pi-user',
        command: () => {
          console.log('Perfil clicked');
          // Implementar navegación al perfil
        }
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        command: () => {
          console.log('Configuración clicked');
          // Implementar navegación a configuración
        }
      },
      {
        separator: true
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          console.log('Logout clicked');
          // Implementar lógica de cierre de sesión
        }
      }
    ];
  }
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  
  markAllAsRead() {
    this.notifications.forEach(notification => {
      notification.read = true;
    });
    this.unreadNotifications = 0;
  }
}
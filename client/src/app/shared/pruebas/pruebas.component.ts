import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { StyleClassModule} from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FooterComponent } from "../../core/components/footer/footer.component";



@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [
    ButtonModule, StyleClassModule, BreadcrumbModule, 
    CheckboxModule, InputTextModule, TagModule, CarouselModule, 
    FooterComponent, 
],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.scss'
})
export class PruebasComponent implements OnInit {
onLogout() {
throw new Error('Method not implemented.');
}
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;














  ngOnInit() {
    this.items = [
  { label: 'Inicio', icon: 'pi pi-sitemap', routerLink: '/app-root' },
  { label: 'Inicio', icon: 'pi pi-sitemap', routerLink: '/app-root' },
  { label: 'Libros', icon: 'pi pi-book', routerLink: '/libros' },
  { label: 'Cartera', icon: 'pi pi-wallet', routerLink: '/cartera' },
  { label: 'Tienda', icon: 'pi pi-shopping-bag', routerLink: '/tienda' },
  { label: 'Calculadora', icon: 'pi pi-calculator', routerLink: '/calculadora' },
  { label: 'Organigrama', icon: 'pi pi-sitemap', routerLink: '/organigrama' },
  { label: 'Biblioteca', icon: 'pi pi-book', routerLink: '/biblioteca' },
  { label: 'Finanzas', icon: 'pi pi-wallet', routerLink: '/finanzas' },
  { label: 'Compras', icon: 'pi pi-shopping-bag', routerLink: '/compras' },
  { label: 'Presupuesto', icon: 'pi pi-calculator', routerLink: '/presupuesto' }
];

this.home = { icon: 'pi pi-home', routerLink: '/', label: 'Inicio' };

    
  }
products: any[] | undefined;

responsiveOptions: CarouselResponsiveOptions[]|undefined;
getSeverity(arg0: any): string|undefined {
throw new Error('Method not implemented.');
}
  title = 'client';
}

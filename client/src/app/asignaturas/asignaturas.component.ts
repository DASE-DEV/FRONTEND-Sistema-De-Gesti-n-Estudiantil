import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'; 
import { RippleModule } from 'primeng/ripple'; 
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../core/components/footer/footer.component';
import { HeaderComponent } from "../core/components/header/header.component";

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RippleModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.scss'
})
export class AsignaturasComponent {
  onSelect(asignatura: string) {
    console.log('Seleccionaste:', asignatura);
  }

  asignaturas = [
    'Antiguo Testamento Introducción',
    'Epístolas Pastorales y Paulinas',
    'Escatología I',
    'Estudio de los Evangelios',
    'Evangelismo Efectivo',
    'Formación del Canon e Introducción a la Biblia',
    'Hechos',
    'Hermenéutica',
    'Historia de la Iglesia',
    'Homilética',
    'Introducción Educación Cristiana',
    'Literatura Sapiencial',
    'Nuevo Testamento Introducción',
    'Pentateuco',
    'Persona y Obra del Espíritu Santo',
    'Técnicas para la preparación de párrafos y textos',
    'Teología Sistemática',
  ];


  
  get columnas(): string[][] {
    const result: string[][] = [];
    for (let i = 0; i < this.asignaturas.length; i += 6) {
      result.push(this.asignaturas.slice(i, i + 6));
    }
    return result;
  }
}

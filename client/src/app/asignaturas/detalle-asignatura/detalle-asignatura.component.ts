import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from "../../core/components/header/header.component";
import { FooterComponent } from "../../core/components/footer/footer.component";


@Component({
  selector: 'app-detalle-asignatura',
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, ButtonModule, HeaderComponent, FooterComponent],
  templateUrl: './detalle-asignatura.component.html',
  styleUrl: './detalle-asignatura.component.scss'
})
export class DetalleAsignaturaComponent {
  asignatura: string | null = null;
  items = [
    'Planilla de Calificaciones',
    'Planilla de Asistencia',
    'Descripción',
    'Parámetros de Clase',
    'Competencias',
    'Índice de Temas',
    'Foro',
    'Archivos'
  ];

  constructor(private route: ActivatedRoute) {
    this.asignatura = decodeURIComponent(this.route.snapshot.paramMap.get('nombre') ?? '');
  }
}


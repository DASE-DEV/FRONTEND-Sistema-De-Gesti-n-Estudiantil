import { Modulo } from "./modulo.model";

export interface Program {
description: any;
users: any;
  id: string;
  nombre: string;
  descripcion: string;
  nivel: 'Básico' | 'Avanzado';
  modulos: Modulo[];
  activo: boolean;
}
export interface Subject {
    id: string;
    nombre: string;
    codigo: string;
    descripcion: string;
    creditos: number;
    duracionSemanas: number;
    profesoresAsignados: string[];
    activo: boolean;
  }
import { Subject } from "./subject.model";

export interface Modulo {
  id: string;
  nombre: string;
  orden: number;
  subjects: Subject[];
}
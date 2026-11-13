export interface User {
  id?: number;
  nombre?: string;
  apellido?: string; // <--- Agregado
  email: string;
  password?: string;
  rol?: string;
}
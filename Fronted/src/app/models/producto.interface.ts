export interface Categoria {
  id: number; // <-- Asegúrate de que no tenga el signo '?'
  nombre: string;
  detalle?: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoryId: number;
  category?: Categoria;
}
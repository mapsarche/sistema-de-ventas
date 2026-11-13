export interface OrderItem {
  productId: number;
  cantidad: number;
}

export interface Order {
  id?: number;
  userId: number;
  items: OrderItem[];
  total: number;
  fecha: string;
  estado: string;
  createdAt?: string;
}
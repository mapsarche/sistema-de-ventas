import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { ProductoService } from '../../services/producto.service';
import { UserService } from '../../services/user.service'; // 1. Importa el servicio de usuarios
import { Order } from '../../models/order.interface';
import { Producto } from '../../models/producto.interface';
import { User } from '../../models/user.interface'; // 2. Importa el modelo de usuario

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  productos: Producto[] = [];
  users: User[] = []; // 3. Arreglo para almacenar los usuarios

  nuevaOrden: Order = {
    userId: 0, 
    items: [{ productId: 0, cantidad: 1 }],
    total: 0,
    fecha: new Date().toISOString(),
    estado: 'PENDIENTE'
  };

  constructor(
    private orderService: OrderService,
    private productoService: ProductoService,
    private userService: UserService // 4. Inyéctalo en el constructor
  ) {}

  ngOnInit(): void {
    this.cargarOrders();
    this.cargarProductos();
    this.cargarUsers(); // 5. Llámalos al iniciar
  }

  cargarOrders(): void {
    this.orderService.getOrders().subscribe((data: any) => this.orders = data);
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe((data: any) => this.productos = data);
  }

  cargarUsers(): void {
    this.userService.getUsers().subscribe((data: any) => this.users = data); // 6. Método para obtener usuarios
  }

  agregarItem(): void {
    this.nuevaOrden.items.push({ productId: 0, cantidad: 1 });
  }

  eliminarItem(index: number): void {
    if (this.nuevaOrden.items.length > 1) {
      this.nuevaOrden.items.splice(index, 1);
    }
  }

  guardarOrden(): void {
    let calculatedTotal = 0;
    for (const item of this.nuevaOrden.items) {
      const prod = this.productos.find(p => p.id === Number(item.productId));
      if (prod) {
        calculatedTotal += Number(prod.precio) * Number(item.cantidad);
      }
    }

    const ordenAEnviar = {
      userId: Number(this.nuevaOrden.userId),
      items: this.nuevaOrden.items.map(item => ({
        productId: Number(item.productId),
        cantidad: Number(item.cantidad)
      })),
      total: calculatedTotal,
      fecha: new Date().toISOString(),
      estado: 'PENDIENTE'
    };

    this.orderService.crearOrder(ordenAEnviar).subscribe({
      next: () => {
        alert('¡Venta / Orden registrada con éxito!');
        this.cargarOrders();
        this.nuevaOrden = { 
          userId: 0, 
          items: [{ productId: 0, cantidad: 1 }],
          total: 0,
          fecha: new Date().toISOString(),
          estado: 'PENDIENTE'
        };
      },
      error: (err) => {
        console.error('Detalle completo del error:', err.error);
        alert('Hubo un error al registrar la venta. Revisa la consola.');
      }
    });
  }
}
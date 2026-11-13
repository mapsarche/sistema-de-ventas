import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  nuevoProducto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    categoryId: 0
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  guardarProducto(): void {
    if (!this.nuevoProducto.nombre || this.nuevoProducto.precio <= 0) {
      alert('Por favor, completa el nombre y un precio válido.');
      return;
    }

    this.productoService.crearProducto(this.nuevoProducto).subscribe({
      next: () => {
        alert('¡Producto registrado con éxito!');
        this.cargarProductos();
        this.nuevoProducto = { nombre: '', descripcion: '', precio: 0, stock: 0, categoryId: 0};
      },
      error: (err) => {
        console.error('Error al registrar producto:', err);
        alert('Hubo un error al registrar el producto.');
      }
    });
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe({
        next: () => {
          alert('Producto eliminado con éxito');
          this.cargarProductos();
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('No se pudo eliminar el producto.');
        }
      });
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria.interface';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.html'
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];

  nuevaCategoria: Categoria = {
    nombre: '',
    descripcion: ''
  };

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error('Error al cargar categorías:', err)
    });
  }

  guardarCategoria(): void {
    if (!this.nuevaCategoria.nombre) {
      alert('El nombre de la categoría es obligatorio.');
      return;
    }

    this.categoriaService.crearCategoria(this.nuevaCategoria).subscribe({
      next: () => {
        alert('¡Categoría registrada con éxito!');
        this.cargarCategorias();
        this.nuevaCategoria = { nombre: '', descripcion: '' };
      },
      error: (err) => {
        console.error('Error al registrar categoría:', err);
        alert('Hubo un error al registrar la categoría.');
      }
    });
  }

  eliminarCategoria(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta categoría?')) {
      this.categoriaService.eliminarCategoria(id).subscribe({
        next: () => {
          alert('Categoría eliminada con éxito');
          this.cargarCategorias();
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('No se pudo eliminar la categoría.');
        }
      });
    }
  }
}
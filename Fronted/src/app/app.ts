import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <!-- Barra de Navegación Global -->
    <nav style="background: #2c3e50; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
      <a routerLink="/categoria" style="color: white; margin-right: 20px; text-decoration: none; font-weight: bold;">Categorías</a>
      <a routerLink="/productos" style="color: white; margin-right: 20px; text-decoration: none; font-weight: bold;">Productos</a>
      <a routerLink="/users" style="color: white; margin-right: 20px; text-decoration: none; font-weight: bold;">Usuarios</a>
      <a routerLink="/orders" style="color: white; text-decoration: none; font-weight: bold;">Órdenes (Ventas)</a>
    </nav>

    <!-- Contenido de las rutas -->
    <router-outlet></router-outlet>
  `
})
export class App {
  title = 'sistema-ventas-front';
}
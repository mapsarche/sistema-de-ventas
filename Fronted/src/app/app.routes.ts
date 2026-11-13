import { Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria';
import { ProductoComponent } from './components/producto/producto.component';
import { OrderComponent } from './components/orders/order.component';
import { UserComponent } from './components/user/user.component'; // 1. Importa el componente de usuarios

export const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'users', component: UserComponent }, // 2. Agrega la ruta para los usuarios
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },
  { path: '**', redirectTo: 'categoria' }
];
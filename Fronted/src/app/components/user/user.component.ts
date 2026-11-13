import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: User[] = [];
nuevoUser: User = {
    nombre: '',
    apellido: '', // <--- Agregado
    email: '',
    password: '',
    rol: 'CLIENTE'
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarUsers();
  }

  cargarUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  guardarUser(): void {
    this.userService.crearUser(this.nuevoUser).subscribe({
      next: () => {
        alert('¡Usuario registrado con éxito!');
        this.cargarUsers();
        this.nuevoUser = { nombre: '', email: '', password: '', rol: 'CLIENTE' };
      },
      error: (err) => {
        console.error('Los 3 errores del backend de usuarios son:', err.error.message); // <--- Esto nos mostrará la verdad
        alert('Error 400 en usuario: Revisa la consola.');
      }
    });
  }}
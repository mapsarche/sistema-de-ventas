import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDto {

  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @IsNotEmpty()
  @IsString()
  apellido!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  rol!: string;
}
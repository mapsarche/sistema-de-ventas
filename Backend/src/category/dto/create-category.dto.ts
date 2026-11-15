import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string; // <-- Agrega este signo !

  @IsString()
  @IsOptional()
  detalle!: string; // <-- Agrega este signo !
}
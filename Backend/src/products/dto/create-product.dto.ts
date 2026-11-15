import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  categoryId!: number;

  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion!: string;

  @IsNotEmpty()
  @IsNumber()
  precio!: number;

  @IsNotEmpty()
  @IsNumber()
  stock!: number;
}
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsNumber()
  stock?: number;
}
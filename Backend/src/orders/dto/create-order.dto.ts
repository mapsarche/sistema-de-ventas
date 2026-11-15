import { IsNotEmpty, IsString, IsNumber } from 'class-validator';


export class CreateOrderDto {

  @IsNotEmpty()
  @IsString()
  fecha!: string;

  @IsNotEmpty()
  @IsNumber()
  total!: number;

  @IsNotEmpty()
  @IsString()
  estado!: string;

  @IsNotEmpty()
  @IsNumber()
  userId!: number;

  
}
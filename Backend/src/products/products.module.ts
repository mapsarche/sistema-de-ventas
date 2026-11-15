import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { CategoryModule } from '../category/category.module'; // <-- Importa el módulo

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule, // <-- Úsalo aquí
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
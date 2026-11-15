import { ProductService } from './product.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductService,
  ) {}

  @Post()
  create(@Body() productData: CreateProductDto) {
    return this.productsService.create(productData);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
@Put(':id')
update(
  @Param('id') id: number,
  @Body() productData: UpdateProductDto,
) {
  return this.productsService.update(id, productData);
}

@Delete(':id')
remove(@Param('id') id: number) {
  return this.productsService.remove(id);
}
}
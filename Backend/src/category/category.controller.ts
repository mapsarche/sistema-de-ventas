import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Post()
  create(@Body() categoryData: CreateCategoryDto) {
    return this.categoryService.create(categoryData);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() categoryData: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, categoryData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }

}
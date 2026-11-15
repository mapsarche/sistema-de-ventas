import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(categoryData: Partial<Category>) {
    const category = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  update(id: number, categoryData: Partial<Category>) {
    return this.categoryRepository.update(id, categoryData);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }

}
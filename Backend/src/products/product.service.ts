import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Category } from '../category/entities/category.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { categoryId, ...productData } = createProductDto;

    const category = await this.categoryRepository.findOneBy({ id: categoryId });
    if (!category) {
      throw new NotFoundException(`La categoría con ID ${categoryId} no existe`);
    }

    const product = this.productRepository.create({
      ...productData,
      category,
    });

    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`El producto con ID ${id} no existe`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    const { categoryId, ...productData } = updateProductDto as any;

    if (categoryId !== undefined) {
      const category = await this.categoryRepository.findOneBy({ id: categoryId });
      if (!category) {
        throw new NotFoundException(`La categoría con ID ${categoryId} no existe`);
      }
      product.category = category;
    }

    Object.assign(product, productData);
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }
}
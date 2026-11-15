// En backend/src/category/entities/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  detalle!: string;

  @OneToMany(() => Product, product => product.category)
  products!: Product[]; // <-- Asegúrate de que esta línea exista
}
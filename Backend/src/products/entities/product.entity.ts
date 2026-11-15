import { Category } from '../../category/entities/category.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column('decimal')
  precio!: number;

  @Column()
  stock!: number;

  @ManyToOne(() => Category, category => category.products, { eager: true })
  @JoinColumn({ name: 'category_id' }) // <-- Agregamos esto para mapear bien la columna en PostgreSQL
  category!: Category;

  @ManyToMany(() => Order, order => order.products)
  orders!: Order[];
}
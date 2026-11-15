import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

}
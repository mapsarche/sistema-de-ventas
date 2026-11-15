import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ManyToMany, JoinTable } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fecha!: string;

  @Column('decimal')
  total!: number;

  @Column()
  estado!: string;
  @ManyToOne(() => User, user => user.orders)
user!: User;
@ManyToMany(() => Product)
@JoinTable()
products!: Product[];
}
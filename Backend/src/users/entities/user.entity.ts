import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  rol!: string;
  @OneToMany(() => Order, order => order.user)
orders!: Order[];
}

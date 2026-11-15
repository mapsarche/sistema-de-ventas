import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity('profiles')
export class Profile {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  telefono!: string;

  @Column()
  direccion!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;
}
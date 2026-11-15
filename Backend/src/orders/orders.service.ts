import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  create(orderData: Partial<Order>) {
    const order = this.ordersRepository.create(orderData);
    return this.ordersRepository.save(order);
  }

  findAll() {
    return this.ordersRepository.find();
  }

  update(id: number, orderData: Partial<Order>) {
    return this.ordersRepository.update(id, orderData);
  }

  remove(id: number) {
    return this.ordersRepository.delete(id);
  }
}
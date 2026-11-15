import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {

  constructor(
    private readonly ordersService: OrdersService,
  ) {}

  @Post()
  create(@Body() orderData: CreateOrderDto) {
    return this.ordersService.create(orderData);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() orderData: UpdateOrderDto,
  ) {
    return this.ordersService.update(+id, orderData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
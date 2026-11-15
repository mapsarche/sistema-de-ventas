import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  
  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
@Put(':id')
update(
  @Param('id') id: string,
  @Body() userData: UpdateUserDto,
) {
  return this.usersService.update(+id, userData);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.usersService.remove(+id);
}
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(userData: Partial<User>) {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }
  findByEmail(email: string) {
  return this.usersRepository.findOne({
    where: { email },
  });
}
update(id: number, userData: Partial<User>) {
  return this.usersRepository.update(id, userData);
}

remove(id: number) {
  return this.usersRepository.delete(id);
}
}
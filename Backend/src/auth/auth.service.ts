import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

 constructor(
  private readonly usersService: UsersService,
  private readonly jwtService: JwtService,
) {}

 async register(registerDto: RegisterAuthDto) {

  const hashedPassword = await bcrypt.hash(registerDto.password, 10);

  return this.usersService.create({
    ...registerDto,
    password: hashedPassword,
  });
}

async login(loginDto: LoginAuthDto) {
  const user = await this.usersService.findByEmail(loginDto.email);

  if (!user) {
    throw new UnauthorizedException('Usuario no encontrado');
  }
const isPasswordValid = await bcrypt.compare(
  loginDto.password,
  user.password,
);

if (!isPasswordValid) {
  throw new UnauthorizedException('Contraseña incorrecta');
}
 const payload = {
  email: user.email,
};
  return {
    access_token: this.jwtService.sign(payload),
  };
}
} 
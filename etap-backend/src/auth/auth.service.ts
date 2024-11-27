import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthInputDto } from './dto/auth.dto';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(input: CreateUserDto): Promise<any> {
    const user = await this.userService.create(input);
    const { access_token } = await this.signToken(user);
    return {
      ...user,
      access_token,
    };
  }

  async authenticateUser(input: AuthInputDto): Promise<any> {
    const user = await this.validateUser(input);
    if (!user) throw new UnauthorizedException();
    const { access_token } = await this.signToken(user);
    return {
      ...user,
      access_token,
    };
  }

  async validateUser({
    email,
    password,
  }: AuthInputDto): Promise<Omit<User, 'password'>> {
    const user = await this.userService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signToken(user: any) {
    return {
      access_token: this.jwtService.sign(user, {
        secret: process.env.JWT_SECRET,
        expiresIn: '60m',
      }),
    };
  }
}

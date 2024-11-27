import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserDto) {
    const user = await this.findByEmail(input.email);
    if (user) throw new BadRequestException('User already exist');
    const hashedPassword = await bcrypt.hash(input.password, 8);
    let newUser = {
      name: input.name,
      email: input.email,
      password: hashedPassword,
    };
    const createdUser = await this.prisma.user.create({ data: newUser });
    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
    };
  }

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException();
    return user;
  }
}

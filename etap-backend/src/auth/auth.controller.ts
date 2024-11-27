import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthInputDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: AuthInputDto) {
    return this.authService.authenticateUser(input);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  create(@Body() input: CreateUserDto) {
    return this.authService.create(input);
  }
}

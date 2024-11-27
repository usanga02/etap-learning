import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@UseGuards(AuthGuard)
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    const subject = this.subjectsService.createSubject(createSubjectDto);
    return subject;
  }

  @Get()
  findAll() {
    return this.subjectsService.getAllSubjects();
  }
}

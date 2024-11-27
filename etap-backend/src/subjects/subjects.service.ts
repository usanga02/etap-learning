import { Injectable, UseGuards } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  getAllSubjects() {
    return this.prisma.subject.findMany({
      include: { topics: { include: { progress: true } } },
    });
  }

  createSubject(data: CreateSubjectDto) {
    return this.prisma.subject.create({ data });
  }
}

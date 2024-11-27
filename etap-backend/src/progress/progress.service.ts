import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async trackProgress(userId: number, topicId: number) {
    const progress = await this.prisma.progress.findFirst({
      where: { userId, topicId },
    });
    if (progress) throw new ConflictException('Already completed');
    return await this.prisma.progress.create({
      data: { userId, topicId, status: 'COMPLETED' },
    });
  }
}

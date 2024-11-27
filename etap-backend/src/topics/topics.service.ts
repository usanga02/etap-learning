import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTopicDto: CreateTopicDto) {
    return await this.prisma.topic.create({ data: createTopicDto });
  }

  async findOne(id: string) {
    const topic = await this.prisma.topic.findUnique({ where: { id: +id } });
    return topic;
  }
}

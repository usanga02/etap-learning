import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ProgressModule } from './progress/progress.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [UsersModule, AuthModule, SubjectsModule, ProgressModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

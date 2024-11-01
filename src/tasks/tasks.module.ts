import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configConnectionPostgres } from 'src/database/connectionDatabase';

@Module({
  imports: [
    TypeOrmModule.forRoot(configConnectionPostgres),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

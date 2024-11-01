import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configConnectionPostgres } from './database/connectionDatabase';
import { TasksModule } from './tasks/tasks.module';
import Task from './database/entity/task';



@Module({
  imports: [
    TypeOrmModule.forRoot(configConnectionPostgres),
    TasksModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

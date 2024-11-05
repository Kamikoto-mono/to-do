import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configConnectionPostgres } from './database/connectionDatabase';
import { TasksModule } from './tasks/tasks.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(configConnectionPostgres),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

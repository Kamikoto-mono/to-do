import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configConnectionPostgres } from './database/connectionDatabase';



@Module({
  imports: [
    TypeOrmModule.forRoot(configConnectionPostgres),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

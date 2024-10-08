import { Module } from '@nestjs/common';
import { Transport, Client, ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';

@Module({
  imports: [
    ClientsModule.register([{
      name: "TASK-SERVICE",
      transport: Transport.REDIS,
      options:{
        host: 'localhost',
        port: 6379,
      }
    }]) 
  ],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TaskDTO } from './dto/task.dto';
import { Observable } from 'rxjs';

@Controller('api/task')
export class TaskController {
    constructor(
        @Inject("TASK_SERVICE") private readonly client: ClientProxy
    ) { }

    async onModuleInit() {
        await this.client.connect()
    }

    @Post()
    create(@Body() TaskDTO: TaskDTO): Observable<any> {
        return this.client.send({ cmd: 'create-task' }, TaskDTO)
    }
}

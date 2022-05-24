import { Injectable } from '@nestjs/common';
import { StatusEnum, Task } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(name: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      name,
      description,
      status: StatusEnum.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}

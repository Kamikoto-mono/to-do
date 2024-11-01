import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Task from 'src/database/entity/task';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  updateStatusAll() {
    return `This action updates a status for all tasks`
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }

  asremoveTaksCompleted() {
    return `this avtion delete all completed tasks`
  }
}

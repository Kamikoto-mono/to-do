import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Task from 'src/database/entity/task';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  getAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async create(createTask) {
    await this.tasksRepository.save(createTask);
    return 'Task created'
  }

  async update(id: number, updateTask) {
    await this.tasksRepository.update(id, updateTask);
    return this.tasksRepository.findOne({
      where: { id: id}
    });
  }

  async updateStatusAll(targetStatus) {
    await this.tasksRepository.update({ status: !targetStatus }, { status: targetStatus });
    return `All tasks ${targetStatus ? 'completed' : 'unfulfilled'}`
  }

  async remove(id: number) {
    await this.tasksRepository.delete(id);
    return 'Task delete';
  }

  async removeTasksCompleted() {
    const res = await this.tasksRepository.delete({
      status: true
    })
    console.log(res);
    
    return `${res.affected} completed tasks were deleted`;
  }
}

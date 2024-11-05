import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Post()
  create(@Body() createTask) {
    return this.tasksService.create(createTask);
  }

  @Patch('/all')
  updateStatusAll(@Body() body) {
    return this.tasksService.updateStatusAll(body.status);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTask) {
    return this.tasksService.update(+id, updateTask);
  }

  @Delete('/all')
  removeTasksCompleted() {
    return this.tasksService.removeTasksCompleted();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}

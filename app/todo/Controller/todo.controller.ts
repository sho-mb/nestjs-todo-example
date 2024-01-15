import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { TodoService } from '../Service/todo.service';
import { TodoStatus, Todos } from '../todo.entity';
import { CreateTodoInput } from '../dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('list')
  async getList() {
    const todos = await this.todoService.findAll();
    if (!todos) {
      throw new NotFoundException({ message: 'No tasks' });
    }
    return todos;
  }

  @Post('add')
  async add(@Body() todo: CreateTodoInput) {
    const newTodo = new Todos();
    newTodo.title = todo.title;
    newTodo.deadLine_at = todo.deadLine_at;
    newTodo.status = TodoStatus.WAITING;
    await this.todoService.add(newTodo);
  }
}

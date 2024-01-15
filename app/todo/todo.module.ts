import { Module } from '@nestjs/common';
import { TodoController } from './Controller/todo.controller';
import { TodoService } from './Service/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}

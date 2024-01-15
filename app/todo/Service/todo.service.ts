import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todos } from '../todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
  ) {}

  async findAll(): Promise<Todos[]> {
    return await this.todosRepository.find();
  }

  async add(newTodo: Todos): Promise<void> {
    await this.todosRepository.save(newTodo);
  }
}

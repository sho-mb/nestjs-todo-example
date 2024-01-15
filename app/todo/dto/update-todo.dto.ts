import { TodoStatus } from '../todo.entity';

export class UpdateTodoInput {
  id: string;
  title?: string;
  status?: TodoStatus;
}

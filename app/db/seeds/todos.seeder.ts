import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Todos } from '../../todo/todo.entity';

export default class TodoSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await dataSource.query('TRUNCATE TABLE Todos;');

    const repository = dataSource.getRepository(Todos);
    await repository.insert({
      title: 'Play game',
      deadLine_at: '24/3/1',
    });
  }
}

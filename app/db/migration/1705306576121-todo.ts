import { MigrationInterface, QueryRunner } from 'typeorm';

export class Todo1705306576121 implements MigrationInterface {
  name = 'Todo1705306576121';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`todos\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`status\` enum ('waiting', 'done') NOT NULL, \`deadLine_at\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`todos\``);
  }
}

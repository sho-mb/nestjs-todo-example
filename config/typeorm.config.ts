import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config({ path: '.env' });

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || '',
  charset: 'utf8mb4',
  keepConnectionAlive: true,
  entities: [join(__dirname, '../app/**/*.entity{.ts,.js}')],
  migrationsRun: false,
  synchronize: true,
  logging: process.env.APP_STAGE === 'dev',
  autoLoadEntities: true,
  timezone: process.env.DB_TZ || process.env.APP_TZ || 'local',
};

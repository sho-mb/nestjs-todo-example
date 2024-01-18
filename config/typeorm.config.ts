import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { DataSourceOptions, DataSource } from 'typeorm';
import { registerAs } from '@nestjs/config';
dotenvConfig({ path: '.env' });

const config = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || '',
  charset: 'utf8mb4',
  entities: [join(__dirname, '../app/**/*.entity{.ts,.js}')],
  migrations: ['app/migration/*.ts'],
  migrationsRun: false,
  synchronize: false,
  logging: process.env.APP_STAGE === 'dev',
  timezone: process.env.DB_TZ || process.env.APP_TZ || 'local',
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);

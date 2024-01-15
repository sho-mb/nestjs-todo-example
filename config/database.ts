import { registerAs } from '@nestjs/config';
import { toInteger } from 'lodash';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategy';

export default registerAs('database', () => ({
  type: process.env.DB_CONNECTION || 'mysql',
  host: process.env.DB_HOST,
  port: toInteger(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || '',
  // namingStrategy: new SnakeNamingStrategy(),
  charset: process.env.DB_CHARSET || 'utf8mb4',
  supportBigNumbers: true,
  bigNumberStrings: false,
  keepConnectionAlive: true,
  entityPrefix: process.env.DB_ENTITY_PREFIX || '',
  entities: [],
  subscribers: [],
  migrationsRun: false,
  synchronize: false,
  logging: [true, 'true'].includes(process.env.DB_LOGGING || false),
  autoLoadEntities: true,
  timezone: process.env.DB_TZ || process.env.APP_TZ || 'local',
}));

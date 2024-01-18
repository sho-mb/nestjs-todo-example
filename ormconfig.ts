// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as defaultConfig from './config/typeorm.config';

const config = {
  ...defaultConfig,
  cli: {
    migrationsDir: '/migration',
  },
};

config.connectionSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default config;

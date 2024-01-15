import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT || 3000,
  stage: process.env.APP_STAGE,
  url: process.env.APP_URL || '',
  prefix: process.env.APP_PREFIX || '',
  lang: process.env.APP_LANG || 'ja',
  isDevelopment() {
    return (
      ['dev', 'development', 'local'].indexOf(
        process.env.APP_STAGE || process.env.NODE_ENV || 'dev',
      ) !== -1
    );
  },
  title: process.env.node_title,
}));

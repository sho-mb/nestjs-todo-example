module.exports = {
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3000,
  stage: process.env.APP_STAGE,
  url: process.env.APP_URL || 'http://localhost:3000',
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
};

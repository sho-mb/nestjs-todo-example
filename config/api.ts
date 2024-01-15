import { registerAs } from '@nestjs/config';

export interface ApiKeyConfig {
  enabled: boolean;
  name: string;
  prefix: string;
  value: string;
  description: string[];
}
export interface ApiDocConfig {
  enabled: boolean;
  path: string;
  user: string;
  pwd: string;
  description: string[];
}
export interface ApiConfig {
  prefix: string;
  key: ApiKeyConfig;
  doc: ApiDocConfig;
}

const config = (): ApiConfig => {
  const {
    API_PREFIX,
    API_KEY_ENABLED,
    API_KEY_NAME,
    API_KEY_PREFIX,
    API_KEY_VALUE,
    API_DOC_ENABLED,
    API_DOC_PATH,
    API_DOC_USER,
    API_DOC_PWD,
  } = process.env;
  const name = API_KEY_NAME || 'x-api-key';
  return {
    prefix: API_PREFIX || '',
    key: {
      name,
      enabled: API_KEY_ENABLED === 'true',
      prefix: API_KEY_PREFIX || '',
      value: API_KEY_VALUE || '',
      description: [
        `For all resources are prohibiting. To unlock access, you must include the ${name} in header.`,
        `Eg. -H "${name}: Secret String"`,
      ],
    },
    doc: {
      enabled: API_DOC_ENABLED === 'true',
      path: API_DOC_PATH || '/docs',
      user: API_DOC_USER || 'developer',
      pwd: API_DOC_PWD || 'q1w2e3r4t5',
      description: [
        'This is documentation for the API Endpoint.',
        'For every request you must include in the header, Content-Type: application/json.',
      ],
    },
  };
};

export default registerAs<ApiConfig>('api', config);

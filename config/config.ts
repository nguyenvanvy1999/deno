import { dotEnv } from '../deps.ts';
import { IConfiguration } from './interfaces/configuration.interface.ts';
import { Environment } from './interfaces/env.enum.ts';

const env: Environment = (Deno.env.toObject().ENV || 'test') as Environment;
const envPath: string = `.env/.env.${env}`.toString();
let envConfig = dotEnv({
  path: envPath,
});

if (env === Environment.PRODUCTION) {
  envConfig = Deno.env.toObject();
}

/**
 * Configuration
 */
const config: IConfiguration = {
  env,
  appName: envConfig.APP_NAME,
  key: envConfig.KEY,
  jwtSecret: envConfig.JWT_SECRET,
  jwtAccessExpiration: Number(envConfig.JWT_ACCESS_TOKEN_EXP),
  jwtRefreshExpiration: Number(envConfig.JWT_REFRESH_TOKEN_EXP),
  salt: envConfig.SALT,
  ip: envConfig.IP,
  host: envConfig.HOST,
  port: Number(envConfig.PORT),
  protocol: envConfig.PROTOCOL,
  seed: Boolean(envConfig.SEED === 'true'),
  clientHost: envConfig.CLIENT_HOST,
  clientPort: Number(envConfig.CLIENT_PORT),
  clientProtocol: envConfig.CLIENT_PROTOCOL,
  url: `${envConfig.PROTOCOL}://${envConfig.HOST}:${envConfig.PORT}`,
  clientUrl: `${envConfig.CLIENT_PROTOCOL}://${envConfig.CLIENT_HOST}:${envConfig.CLIENT_PORT}`,
};

export default config;

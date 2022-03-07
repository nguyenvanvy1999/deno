import { Environment } from './env.enum.ts';

export interface IConfiguration {
  env: Environment;
  appName: string;
  key: string;
  jwtSecret: string;
  jwtAccessExpiration: number;
  jwtRefreshExpiration: number;
  salt: string;
  ip: string;
  host: string;
  port: number;
  protocol: string;
  seed: boolean;
  clientHost: string;
  clientPort: number;
  clientProtocol: string;
  url: string;
  clientUrl: string;
}

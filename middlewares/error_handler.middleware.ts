import configs from '../config/config.ts';
import { Context, isHttpError, State, Status } from '../deps.ts';
import type { Err } from '../types/types.interface.ts';
import log from './logger.middleware.ts';
import { Environment } from '../config/interfaces/env.enum.ts';

/**
 * Throws Error with provided params
 * @param options
 * @throws Error Throws Error
 */
export const throwError = (options: Err): Error => {
  throw options;
};

/**
 * Error Handler Middleware function
 * @param ctx
 * @param next
 * @returns Promise<void>
 */
export const errorHandler = async (
  // deno-lint-ignore no-explicit-any
  ctx: Context<State, Record<string, any>>,
  next: () => Promise<unknown>
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    let message = err.message;
    const name = err.name;
    const path = err.path;
    const type = err.type;
    const status = err.status || err.statusCode || Status.InternalServerError;

    const { env } = configs;
    if (!isHttpError(err)) {
      message = env === Environment.DEVELOPMENT ? message : 'Internal Server Error';
    }

    if (env === Environment.DEVELOPMENT) {
      log.debug(err);
    }

    ctx.response.status = status;
    ctx.response.body = { message, name, path, type, status };
  }
};

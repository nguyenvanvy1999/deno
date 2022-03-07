import type { RouterContext } from '../deps.ts';
import log from '../middlewares/logger.middleware.ts';

export default class HelloController {
  public static helloWorld({ response }: RouterContext<any>): void {
    log.debug('Creating user');
    response.body = { message: 'Hello World' };
  }
}

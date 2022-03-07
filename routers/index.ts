import type { Application } from '../deps.ts';
import defaultRouter from './hello.router.ts';

const init = (app: Application) => {
  app.use(defaultRouter.routes());
  app.use(defaultRouter.allowedMethods());
};

export default {
  init,
};

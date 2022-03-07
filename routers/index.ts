import type { Application } from '../deps.ts';
import helloRouter from './hello.router.ts';
import defaultRouter from './default.router.ts';

const init = (app: Application) => {
  app.use(helloRouter.routes());
  app.use(helloRouter.allowedMethods());

  app.use(defaultRouter.routes());
  app.use(defaultRouter.allowedMethods());
};

export default {
  init,
};

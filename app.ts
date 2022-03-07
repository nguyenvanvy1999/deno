import { Application, oakCors } from './deps.ts';
import { errorHandler } from './middlewares/error_handler.middleware.ts';
import log from './middlewares/logger.middleware.ts';
import configs from './config/config.ts';
import router from './routers/index.ts';

const { url, port } = configs;

const app: Application = new Application();

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(oakCors(corsOptions));
app.use(errorHandler);

router.init(app);

app.addEventListener('listen', () => {
  log.info(`Server listening at ${url}`);
});

if (import.meta.main) {
  await app.listen({ port });
}

export { app };

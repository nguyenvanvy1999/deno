import { Router } from '../deps.ts';
import HelloController from '../controllers/hello.controller.ts';

const router: Router = new Router();

router.get('/api/users', HelloController.helloWorld);

export default router;

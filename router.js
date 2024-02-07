import Router from 'express';
import FileController from "./controllers/FileController.js";

const router = new Router();

router.post('/files', FileController.create );
router.get('/files', FileController.getAll );
router.get('/files/:id', FileController.getOne );
router.put('/files/:id', FileController.update );
router.delete('/files/:id', FileController.delete );

export default router;
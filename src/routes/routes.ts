import { Router } from "express";
import * as controller from "../controllers/filmes-controller";

const router = Router()

router.get('/filmes', controller.getFilmes)
router.get('/filmes/:id', controller.getFilmeById)
router.post('/filmes', controller.postFilme)
router.put('/filmes/:id', controller.putFilme)
router.delete('/filmes/:id', controller.deleteFilme)

export default router
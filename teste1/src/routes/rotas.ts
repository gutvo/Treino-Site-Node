import{Router,Request,Response}from "express";
import*as HomeController from '../controllers/homeController';
import*as InfoController from '../controllers/infoController';
import*as NomeController from '../controllers/nomeController';

const router = Router();
router.get('/',HomeController.home);
router.get('/sobre',InfoController.sobre);
router.get('/contatos',InfoController.contatos);
router.get('/nome',NomeController.nome);

export default router;
import{Router,Request,Response}from "express";
//import*as LoginController from '../controllers/loginController';
import*as HomeController from '../controllers/homeController';
const router = Router();
//router.get('/',LoginController.login);
router.get('/',HomeController.home);
export default router;
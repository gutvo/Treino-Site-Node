import express,{Request,Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';

console.log("http://localhost/");
const server=express();
server.listen(80);

import rotas from './routes/rotas';
server.use(rotas);
server.use((req:Request,res:Response)=>{
    res.status(404).send('Página não encontrada');
});

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());
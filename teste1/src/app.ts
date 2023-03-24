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
//import painel from './routes/painel'
//server.use('/painel',painel) // isso é para caso tenha dois arquivos com o mesmo nome



server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(express.static('src'));
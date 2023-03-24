import{Response,Request} from 'express';

export const nome=(req:Request,res:Response)=>{
    let nome:string=req.query.nome as string;
    let idade:string=req.query.idade as string
    res.render('nome',{nome,idade});
}
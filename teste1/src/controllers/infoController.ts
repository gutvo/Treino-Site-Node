import{Response,Request} from "express";

export const contatos=(req:Request,res:Response)=>{
    res.render('contatos');
};

export const sobre=(req:Request,res:Response)=>{
    res.render('sobre');
};

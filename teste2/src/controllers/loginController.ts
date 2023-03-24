import {Request,Response} from "express";
import {Login} from "../models/BD";
export const login=(req:Request,res:Response)=>{

    const erro:string="Email ou senha erradas";
    let userName:string=req.query.userName as string;
    let userSenha:string=req.query.userSenha as string;
    if(Login.confirmacao(userName,userSenha)){
        res.render('home',{userName});
    }else{
        res.render('login',{erro});
    }
}
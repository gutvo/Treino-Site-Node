import {Request,Response} from "express";
import {produto} from "../models/produtos";

export const home=(req:Request,res:Response)=>{
    let idade:number=100;
    let exibe:boolean=false;
    if(idade>50){
        exibe=true;
    }
    let lista=produto.getAll();
    let listaProdutosCaros=produto.getMaiores(12);
    res.render('home',{
        nome:"Gustavo",
        exibe,
        caros:listaProdutosCaros,
        produtos:lista,
        saudacoes:[
            'bom dia',
            'boa tarde',
            'boa noite'
        ]
    });
}
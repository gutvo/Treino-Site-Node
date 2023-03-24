type produto={
    titulo:string,
    preco:number
};

const data:produto[]=[
    {titulo:'produto A',preco:10},
    {titulo:'produto B',preco:15},
    {titulo:'produto C',preco:9},
    {titulo:'produto D',preco:29},
    {titulo:'produto E',preco:40}
];

export const produto={
    getAll:():produto[]=>{
        return data;
    },
    getMaiores:(preco:number):produto[]=>{
        return data.filter(item=>{
            if(item.preco>=preco){
                return true;
            }else{
                return false;
            }
        });
    }
}
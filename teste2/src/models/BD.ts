type Login={
    userName:string,
    userSenha:string
};

const data:Login[]=[
{userName:'gutvo10@gmail.com',userSenha:"1234"},
{userName:'gutvo9@gmail.com',userSenha:"1234"},
{userName:'gutvo2@gmail.com',userSenha:"1234"},
];

export const Login={
    confirmacao:(username:string,usersenha:string):boolean=>{
        data.filter(item=>{
            if(item.userName==username && item.userSenha==usersenha){
                return true;
            }
        });
        return false;
    }
}

interface Usuario{
    nome: string;
    email: string;
}
function verificar(usuario: Usuario[], nome:string, email:string ){
    for (let i = 0; i < usuario.length; i++){
    if(usuario[i].email === email){
        console.log("Email já existente!")    
        return;
    }
}
        usuario.push({nome: nome, email:email});
        console.log("Cadastro REALIZADO!")
    }

    function listarUsuarios(usuario:Usuario[]): Usuario[]{
        return usuario;
    }

    let usuario:Usuario[] = [
       
    ]

verificar(usuario, "Maria", "maria@email.com");
verificar(usuario, "João", "joao@email.com");
verificar(usuario, "João Daniel", "joao@email.com");
console.log(listarUsuarios(usuario));
verificar(usuario, "Pedro","pedro@email.com");
console.log(listarUsuarios(usuario));





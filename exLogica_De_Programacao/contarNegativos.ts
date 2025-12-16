function contarNegativos(numerosLista:number[]){
    let contador = 0;
    for(let i = 0; i < numerosLista.length;i++){
        if(numerosLista[i]< 0){
            contador++;
        }
    }
    console.log(contador)
}

//testes
contarNegativos([-1,2,-3])
contarNegativos([-5, 2, -3, 7, 0, -1]);
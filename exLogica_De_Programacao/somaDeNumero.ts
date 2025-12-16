function somarAlgarismosDeNumero(numero:number){
    let algarismo = numero.toString()
    let soma = 0;

    for(let i = 0; i < algarismo.length; i++){
        soma += Number(algarismo[i]);
    }
    console.log('A soma dos digitos é:', soma);
    
}


somarAlgarismosDeNumero(123);
somarAlgarismosDeNumero(527);
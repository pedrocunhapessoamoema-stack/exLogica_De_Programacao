function perfectNumber(numero:number){
    let contarDivisores = 0;
    for(let i = 0; i<numero; i++){
        if(numero % i === 0)
            contarDivisores += i;
    }
    if(contarDivisores === numero){
        console.log('Numero perfeito!')
    }else{
        console.log('Este numero não é perfeito')
    }

   
}



perfectNumber(28);
perfectNumber(35)





  
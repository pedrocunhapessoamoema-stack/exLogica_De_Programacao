function parImpar(numero:number):string{
    if(numero%2===0){
        return "par"
    }else{
        return "impar"
    }
}



//testes
console.log(parImpar(4));
console.log(parImpar(7));
console.log(parImpar(0));
console.log(parImpar(-3));
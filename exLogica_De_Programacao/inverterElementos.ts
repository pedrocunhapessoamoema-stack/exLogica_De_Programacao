function inverteNumeros (lista:string){
    return lista.split("").reverse().join("");

}


//testes
console.log(inverteNumeros("1,2,3"))
console.log(inverteNumeros("4,5,6"))
console.log(inverteNumeros("7,8,9"))
function somarDigitos(numero:string){
    let somar= 0;
    for(let i = 0; i < numero.length; i++){
        somar +=Number(numero [i])
        
    }
    return somar;
}


console.log(somarDigitos('1234'))
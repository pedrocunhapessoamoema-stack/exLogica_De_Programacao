function calcularfatorial(n:number){
    let fatorial = 1;

    for(let i = n; i >=1; i--)
        fatorial*=i
    console.log(fatorial)
}



calcularfatorial(5);
calcularfatorial(2);
calcularfatorial(10);
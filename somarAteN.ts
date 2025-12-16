function somarAteN(n: number): number {
    let soma = 0;
    const numero= Number;
    for( let i = 0; i<=n; i++){
        soma += i;
    }
    return soma;
}


console.log(somarAteN(5)); // Saída: 15
console.log(somarAteN(10)); // Saída: 55
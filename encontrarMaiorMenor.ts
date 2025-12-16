const numeros: number[] = [34, 15, 88, 2, 67, 99, 23];
let maior: number = numeros[0];
let menor: number = numeros[0];


for( let i = 1; i < numeros.length; i++) {
    if(numeros[i] > maior) {
        maior = numeros[i];
    }
    if(numeros[i] < menor) {
        menor = numeros[i];
    }
    
}

console.log(` O maior numero é ${maior} e o menor é ${menor}`)



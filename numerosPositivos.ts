function verPositivo(numeros:number[]){
  let positivos: number [] = []
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] >= 0) positivos.push(numeros[i]);
  }
  return positivos;
}

console.log(verPositivo([5, 2, 4, 6, -5, -9]));

function inverterMatriz(matriz:number[][]){
  let nova: number[][] = [];
  for (let i = 0; i < 3; i++) {
    nova[i] = [];

    for (let j = 0; j < 3; j++) {
      nova[i][j] = matriz[i][2 - j];
    }
  }
  console.log(nova);
}


//Exemplo
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matriz original:", matriz);
inverterMatriz(matriz);

// Dada uma matriz onde cada linha
//  representa as notas de um aluno, calcule a média individual
//  de cada aluno e exiba no console.

function mediaComMatriz(matriz: number[][]) {
  for (let i = 0; i < matriz.length; i++) {
    let soma = 0;

    for (let j = 0; j < matriz.length; j++) {
      soma += matriz[i][j];
    }
    let media = soma / matriz.length;
    console.log(media);
  }
}

//Exemplo

{
  const matriz = [
    [1, 2, 2],
    [4, 5, 6],
    [7, 8, 9],
  ];

  mediaComMatriz(matriz);
}

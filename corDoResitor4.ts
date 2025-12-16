// Instruções um Raspber
// Se você quiser construir algo usandory Pi, provavelmente usará resistores . Para este exercício, você
//  precisa saber duas coisas sobre eles:

// Cada resistor tem um valor de resistência.
// Os resistores são pequenos — tão pequenos, na verdade, que se você imprimisse o valor da resistência neles, seria difícil de ler.
// Para contornar esse problema, os fabricantes imprimem faixas coloridas nos resistores para 
// indicar seus valores de resistência. Cada faixa tem uma posição e um valor numérico.

// As duas primeiras bandas de um resistor têm um esquema de codificação simples: cada cor corresponde a um único número.

// Neste exercício, você criará um programa útil para que não precise se lembrar dos valores das bandas.

// Essas cores são codificadas da seguinte forma:

// preto: 0
// marrom: 1
// vermelho: 2
// laranja: 3
// amarelo: 4
// verde: 5
// azul: 6
// violeta: 7
// cinza: 8
// branco: 9
// O objetivo deste exercício é criar uma maneira:

// para procurar o valor numérico associado a uma determinada faixa de cor
// para listar as diferentes cores das bandas
// Os mnemônicos mapeiam as cores para os números que, quando armazenados como uma matriz, são mapeados para seu índice na matriz: É melhor estar certo ou seus grandes valores darão errado.

const colors = [
  "preto",
  "marrom",
    "vermelho",
    "laranja",
    "amarelo",
    "verde",
    "azul",
    "violeta",
    "cinza",
    "branco"
];


function colorCode(colors: string): number {
  if (colors === "preto") {
    return 0;
  } else if (colors === "marrom") {
    return 1;
  } else if (colors === "vermelho") {
    return 2;
  } else if (colors === "laranja") {
    return 3;
  } else if (colors === "amarelo") {
    return 4;
  } else if (colors === "verde") { 
    return 5;
  } else if (colors === "azul") { 
    return 6;
  } else if (colors === "violeta") { 
    return 7;
  } else if (colors === "cinza") { 
    return 8;
  } else if (colors === "branco") { 
    return 9;
  } else {
   console.log("cor inválida");
    return -1;
  }
}


//Instanciação
console.log(colorCode("verde"));   // Saída: 5
console.log(colorCode("azul"));    // Saída: 6
console.log(colorCode("rosa"));    // Saída: -1 (cor inválida)
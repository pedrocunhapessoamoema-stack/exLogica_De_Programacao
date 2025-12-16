function matrizSimetrica(matriz: number[][]) {
  let simetrica = true;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] !== matriz[j][i]) simetrica = false;
    }
  if (simetrica) {
    console.log("E simetrica");
  } else {
    console.log("Não é simetrica");
  }
}


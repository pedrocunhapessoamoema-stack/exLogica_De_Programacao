function combinacoes(lista: number[]) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      console.log("[" + lista[i] + "," + lista[j] + "]");
    }
  }
}

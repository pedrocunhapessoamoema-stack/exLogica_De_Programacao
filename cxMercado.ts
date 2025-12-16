function trocoDeMercado(ValorDado: number, ValorProduto: number) {
  let troco = ValorDado - ValorProduto;
  let notas = [100, 50, 20, 5, 2];

  for (let i = 0; i < notas.length; i++) {
    let qtd = Math.floor(troco / notas[i]);
    if (qtd > 0) {
      console.log(qtd, "Notas de:", notas[i]);
      troco = troco % notas[i];
    }
  }

  console.log("Valor do troco:", ValorDado - ValorProduto);
}

trocoDeMercado(200, 126);




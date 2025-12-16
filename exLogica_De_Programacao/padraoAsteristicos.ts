function asteristicos(n: number) {
  for (let i = 1; i <= n; i++) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
      linha += "*";
    }
    console.log(linha);
  }
}


asteristicos(4)
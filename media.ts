function media() {
  let soma: number = 0;
  const numeros: number[] = [10, 20, 30];

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  const resultadoMedia: number = soma / numeros.length;
  console.log(` A média dos números é ${resultadoMedia}`);
}
media();

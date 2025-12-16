function somarPares(n: number) {
  let contarpares = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      contarpares += i;
    }
  }
  console.log(contarpares);
}
somarPares(10);
somarPares(5);


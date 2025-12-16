function converterParaRomano(num: number) {
  let valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let resultado = "";

  for (let i = 0; i < valores.length; i++) {
    while (num >= valores[i]) {
      resultado += simbolos[i];
      num -= valores[i];
    }
  }

  console.log(resultado);
}


converterParaRomano(5)
converterParaRomano(6)
converterParaRomano(1010)


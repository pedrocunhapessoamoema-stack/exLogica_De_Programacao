function palavraMaisFrequente(texto: string): void {
  const palavras: string[] = [];

  const contagem: Record<string, number> = {};
  let textoLimpo = "";

  for (let i = 0; i < texto.length; i++) {
    const c = texto[i].toLowerCase();
    if ((c >= "a" && c <= "z") || c === " ") {
      textoLimpo += c;
    }
  }

  // separa as palavras
  let palavraAtual = "";
  for (let i = 0; i < textoLimpo.length; i++) {
    if (textoLimpo[i] !== " ") {
      palavraAtual += textoLimpo[i];
    } else {
      if (palavraAtual !== "") {
        palavras.push(palavraAtual);
        palavraAtual = "";
      }
    }
  }
  if (palavraAtual !== "") palavras.push(palavraAtual);

  for (let i = 0; i < palavras.length; i++) {
    const p = palavras[i];
    if (!contagem[p]) {
      contagem[p] = 1;
    } else {
      contagem[p]++;
    }
  }

  // encontra a palavra mais frequente
  let maisFrequente: string = palavras[0];
  for (let i = 1; i < palavras.length; i++) {
    const atual = palavras[i];
    if (contagem[atual] > contagem[maisFrequente]) {
      maisFrequente = atual;
    }
  }

  console.log(
    "Palavra mais frequente:",
    maisFrequente,
    `(${contagem[maisFrequente]} vezes)`
  );
}

palavraMaisFrequente("Olá mundo, olá universo!");
palavraMaisFrequente("O sol brilha, o sol aquece, o sol ilumina.");

function ehPrimo(n:number) {
  let divisores = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisores++;
    }
  }

  if (divisores === 2) {
    console.log("É primo");
  } else {
    console.log("Não é primo");
  }
}

// Testes adicionados: três chamadas de exemplo
// 2  -> primo
// 7  -> primo
// 9  -> não primo
ehPrimo(2);
ehPrimo(7);
ehPrimo(9);








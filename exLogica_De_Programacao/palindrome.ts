function palindrome(palavra: string): void {
  let invertido = "";
  for (let i = palavra.length - 1; i >= 0; i--) invertido += palavra[i];
  {
    if (invertido === palavra) {
      return console.log(`${palavra} é um palíndromo`);
    } else {
      return console.log(`${palavra} não um palíndromo`);
    }
  }
}

//testes
palindrome("arara");
palindrome("hello");

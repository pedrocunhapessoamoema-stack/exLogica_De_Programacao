function inverteString (palavra:string):string{
  return palavra.split("").reverse().join("");
}


//testes
console.log(inverteString("hello"));
console.log(inverteString("abacaxi"))
console.log(inverteString("12345"));
function contarPrimosn(number: number) {
  let contar = 0;
  for (let i = 2; i <= number; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) if (i % j === 0) primo = false;

    if (primo) {
      contar++;
    }
  }
  console.log("Quandidade de primos é:", contar);
}





contarPrimosn(10)
contarPrimosn(20)
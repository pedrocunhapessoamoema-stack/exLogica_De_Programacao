function contarMaiorDez(num:any[]){
  let contar = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 10) {
      contar ++;
    }
  }
  console.log(contar);
}

//testes
contarMaiorDez([1, 5, 11, 15, 8]); 
contarMaiorDez([10, 12, 13, 9]);
contarMaiorDez([10, 12, 13, 19]);  
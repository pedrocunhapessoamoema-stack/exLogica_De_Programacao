 function contarPares (numbers: number[]): number {
   let contador = 0;
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 === 0) {
       contador++;
     }
   }
   return contador;
 }

 //testes
 console.log(contarPares([0, 2, 3, 5, ]));
 console.log(contarPares([-5, 2, -3, 7, 0, -1]));

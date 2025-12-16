function contarVogais(texto:string):number{
    const letrasVogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú',];
 let contador = 0;
 
for(let i=0; i<texto.length; i++){
   if(letrasVogais.includes(texto[i])){
    contador++;
    }
    
}
return contador;

}
console.log(contarVogais("Hello World")); // Saída: 3
console.log(contarVogais("TypeScript é incrível!")); // Saída: 6
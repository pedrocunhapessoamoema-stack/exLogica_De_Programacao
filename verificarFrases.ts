function verificarFrases(frase1: string, frase2: string){
    frase1 = frase1.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
    frase2 = frase2.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

if(frase1 === frase2){
    console.log('As duas frases são quase iguais!')
}else{
    console.log('As frases são diferentes!')
}
}


verificarFrases("Olá Mundo", "ola mundo")
verificarFrases("Ola mundo", "ola estados unidos")


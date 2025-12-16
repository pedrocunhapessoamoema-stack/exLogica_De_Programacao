function contar(frase:string){
    let cf = 1
    for(let i = 0; i < frase.length; i++ ){
    if(frase[i] === ' ')
    cf ++;
    }
    console.log(`${cf} palavras`)
}


contar('Moema e louco demais');
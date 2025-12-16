function caixa(valor:number){
    let notas =  [100, 50, 20, 10, 5, 2];
    for(let i = 0; i< notas.length; i++){
        let qtd = Math.floor(valor/notas[i]);
        console.log((qtd   + "  nota de  " +   notas[i]));
        valor = valor % notas[i];
    }
}



caixa(186)
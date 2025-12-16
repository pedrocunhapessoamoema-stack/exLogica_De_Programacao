function conversao(celsius:number):number{
    const fareinht = celsius * 1.8 + 32
    return fareinht;
}


//testes
console.log(conversao(10));
console.log(conversao(0))
  
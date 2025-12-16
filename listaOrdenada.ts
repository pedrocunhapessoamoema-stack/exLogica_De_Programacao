function listaOrdenada(lista: number[]) {
  let ordenada = true;
  for (let i = 0; i < lista.length - 1; i++) {
    if (lista[i] >= lista[i + 1]) {
      ordenada = false;
    }
  }
  if (ordenada) {
    console.log("Ordenada!");
  } else {
    console.log("Não ordenada!");
  }
}

listaOrdenada([1, 2, 3, 4, 5]);

listaOrdenada([2, 8, 5]);

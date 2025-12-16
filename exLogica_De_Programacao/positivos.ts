

function todosPositivos(lista: number[]) {
  let todos = true;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] <= 0) {
      todos = false;
    }
  }
  if (todos) {
    console.log("Todos são positivos");
  } else {
    console.log("Nem todos são positivos");
  }
}


//testes
todosPositivos([1, 12, 23]);
todosPositivos([1, -12, -23]);
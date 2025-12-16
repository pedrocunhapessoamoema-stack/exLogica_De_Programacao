let vagas = ["", "", "", "", ""];

function entrada(placa: string) {
  for (let i = 0; i < vagas.length; i++) {
    if (vagas[i] === "") {
      vagas[i] = placa;
      break;
    }
  }
}

function saidaVeiculos(placa: string) {
  for (let i = 0; i < vagas.length; i++) {
    if (vagas[i] === placa) {
      vagas[i] = "";
      break;
    }
  }
}

entrada("123ABC");
console.log(vagas);

entrada("541PCA");
console.log(vagas);

saidaVeiculos("123ABC");
console.log(vagas);

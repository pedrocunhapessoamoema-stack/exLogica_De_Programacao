function verificarSenha(senha: string) {
  senha;
  if (senha.length < 8) {
    console.log("Senha invalida");
    return;
  }
  if (senha.includes(" ")) {
    console.log("Senha invalida");
    return;
  }
  if (!/\d/.test(senha)) {
    console.log("Senha invalida!");
    return;
  }
  if (!/[a-z]/.test(senha) && !/[A-Z]/.test(senha)) {
    console.log("Senha invalida");
    return;
  } else {
    console.log("Senha Valida!");
  }
}

//testes
verificarSenha("Jesus5456465465465412");

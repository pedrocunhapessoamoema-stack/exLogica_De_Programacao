//   - String.fromCharCode transforma o número novamente em letra.
//   - charCodeAt(i) transforma a letra em número (código ASCII).

function cifraCesar(senha: string) {
  let resultado = "";
  for (let i = 0; i < senha.length; i++) {
    let codigo = senha.charCodeAt(i);
    let novoCodigo = codigo + 3;

    if (novoCodigo > 122) {
      novoCodigo = 96 + (novoCodigo - 122);
    }
    resultado += String.fromCharCode(novoCodigo);
  }
  console.log(resultado);
}

cifraCesar('abcd')

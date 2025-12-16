// Introdução
// Um ano bissexto (no calendário gregoriano) ocorre:

// Em cada ano que é divisível por 4.
// A menos que o ano seja divisível por 100, nesse caso só será um ano bissexto se o ano também for divisível por 400.
// Alguns exemplos:

// 1997 não foi um ano bissexto, pois não é divisível por 4.
// 1900 não foi um ano bissexto, pois não é divisível por 400.
// 2000 foi um ano bissexto!

function AnoBissexto(ano: number): boolean {
  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    console.log("Este ano é bissexto!");
    return true;
  } else {
    console.log("Este ano não é bissexto!");
    return false;
  }
}

// Instanciando a função
console.log(AnoBissexto(2020));
console.log(AnoBissexto(2000));
console.log(AnoBissexto(1900));

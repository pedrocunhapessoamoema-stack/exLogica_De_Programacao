function Anagramas(str1: string, str2: string){
    if(str1 === str2.split("").reverse().join("")){
        return console.log('São Anagrmas.');
    }else{
        console.log('Não sao anagrams.')
    }
}

// Testes
Anagramas("amor", "roma"); // esperado: São Anagrmas.
Anagramas("abc", "cba");   // esperado: São Anagrmas.
Anagramas("hello", "world"); // esperado: Não sao anagrams.
Anagramas("abc", "cba")


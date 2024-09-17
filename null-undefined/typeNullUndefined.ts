// ==> Exemplo 01: Null

let variavelTesteNull = null;

console.log(variavelTesteNull);
console.log(typeof variavelTesteNull);

// ==> Exemplo 02: Undefined

let variavelTesteUndefined;

console.log(variavelTesteUndefined);
console.log(typeof variavelTesteUndefined);

// ==> Diferenças e Similaridades: Null vs Undefined

console.log('Exemplo 01:', null == undefined);
console.log('Exemplo 02:', null === undefined);

//ex
let testeNull = null;
let testeUndefined;

console.log('Exemplo 03:', testeNull == testeUndefined);
console.log('Exemplo 04:', testeNull === testeUndefined);

let corPrimaria: string | null = null;
let corSecundaria: string | undefined;

console.log(corPrimaria);  // null
console.log(corSecundaria);  // undefined

if (corPrimaria == corSecundaria) {
    console.log("As cores ainda não foram escolhidas.");
} else {
    console.log("Alguma cor já foi escolhida.");
}





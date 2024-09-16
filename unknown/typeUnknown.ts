
// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

/*let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/

// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'

/*let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}*/

let algumaCoisaAny: any = 10; // Atribuímos um valor numérico a algumaCoisaAny
let algumaCoisaUnknown: unknown = 20; // Atribuímos um valor numérico a algumaCoisaUnknown

// O método toFixed() funciona porque algumaCoisaAny é um número
console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  // Verificamos o tipo antes de usar toFixed()
  console.log(algumaCoisaUnknown.toFixed());
}

// ===> Exemplo 04: diferença entre: 'any' vs 'unknown'
let qualquerValor: any = "Oi!";
let outroValor: unknown ='oi';

qualquerValor = 123; // Isso é permitido, porque 'any' aceita tudo
console.log(qualquerValor.toFixed(2)); // Isso funciona, porque agora é um número

if (typeof outroValor === 'number') {
  console.log(outroValor.toFixed(2)); // Funciona porque fizemos a checagem
} else {
  console.log("Não é um número, não posso usar toFixed.");
}


// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number];
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa);

let veiculo: [string, string, number];
veiculo = ['Fiat', 'Uno', 2010];
console.log(veiculo);

let endereco: [string, string, number];
endereco = ['Rua das Rosas', 'Centro', 12345];
console.log(endereco);

let cordenadas: [number, number];
cordenadas = [10, 20];
console.log(cordenadas [0]);
console.log(cordenadas [1]);

let amigos: [string, number][] = [
    ['Pedro', 10],
    ['Lucas', 12],
    ['Mariana', 11]
];

// Exibir os amigos e suas idades
for (let i = 0; i < amigos.length; i++) {
    console.log(`Amigo: ${amigos[i][0]}, Idade: ${amigos[i][1]} anos`);
}

// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1: [string, string, number];
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa1[1]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa2);

let veiculo2: [marca: string, modelo: string, ano: number] = ['Fiat', 'Uno', 2010];
console.log(veiculo2);

let livro: [titulo: string, autor: string, anoPublicacao: number] = ['O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943];
console.log(livro);

// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['Maçã', 'Banana', 'Morango', 'Uva'];
console.log(...listaFrutas);

//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log(resultado)

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Glaucia', 'Lemos'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));
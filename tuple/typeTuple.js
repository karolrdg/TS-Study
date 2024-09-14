var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
var pessoa;
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa);
var veiculo;
veiculo = ['Fiat', 'Uno', 2010];
console.log(veiculo);
var endereco;
endereco = ['Rua das Rosas', 'Centro', 12345];
console.log(endereco);
var cordenadas;
cordenadas = [10, 20];
console.log(cordenadas[0]);
console.log(cordenadas[1]);
var amigos = [
    ['Pedro', 10],
    ['Lucas', 12],
    ['Mariana', 11]
];
// Exibir os amigos e suas idades
for (var i = 0; i < amigos.length; i++) {
    console.log("Amigo: ".concat(amigos[i][0], ", Idade: ").concat(amigos[i][1], " anos"));
}
// ==> Exemplo 02 - Acessando o valor da Tupla
var pessoa1;
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
var pessoa2 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa2);
var veiculo2 = ['Fiat', 'Uno', 2010];
console.log(veiculo2);
var livro = ['O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943];
console.log(livro);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
var listaFrutas = ['Maçã', 'Banana', 'Morango', 'Uva'];
console.log.apply(console, listaFrutas);
//==> Exemplo 05 - Lista Heterogênea de Tupla:
var listaFrutas2 = __spreadArray([5, true], listaFrutas, true);
console.log(listaFrutas2);
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes, true), idades, true);
}
var resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log(resultado);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log(criarPessoa('Glaucia', 'Lemos'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));

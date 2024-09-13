// ==> Exemplo 01 - Uso de Colchetes:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭']; //🍎
console.log(frutas[2]);
var carros = ['🚗', '🚙', '🚚', '🚛', '🚜']; //🚜
console.log(carros[4]);
var cidades = ['Florença', 'Paris', 'Londres', 'Madri', 'Roma']; //Paris
console.log(cidades[1]);
var marcas = ['Apple', 'Samsung', 'Motorola', 'LG', 'Xiaomi']; //Apple
console.log(marcas[0]);
var livros = ['O Senhor dos Anéis', 'Harry Potter', 'O Código da Vinci', 'O Pequeno Príncipe', 'Dom Quixote']; //O Pequeno Príncipe
console.log(livros[3]);
// ==> Exemplo 02 - Array Object (Objeto Array):
var frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭']; //🍉
console.log(frutas1[3]);
var carros1 = ['🚗', '🚙', '🚚', '🚛', '🚜']; //🚙
console.log(carros1[1]);
var cidades1 = ['Florença', 'Paris', 'Londres', 'Madri', 'Roma']; //Roma
console.log(cidades1[4]);
// ==> Exemplo 03 - Adicionando mais strings com método 'push'
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
idiomas.push('Alemão');
console.log(idiomas);
idiomas.push('Japonês');
console.log(idiomas);
idiomas.push('Russo');
console.log(idiomas);
// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
var idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length); //4
var idiomas2 = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Mandarim', 'Italiano', 'Alemão', 'Japonês', 'Russo'];
console.log(idiomas2.length); //9
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaNumeros);
var listaCores = ['Azul', 'Vermelho', 'Verde', 'Amarelo', 'Rosa'];
listaCores = __spreadArray(__spreadArray([], listaCores, true), ['Preto', 'Branco', 'Laranja', 'Roxo', 'Marrom'], false);
console.log(listaCores);
var listaCarros = ['Fusca', 'Gol', 'Palio', 'Uno', 'Celta'];
listaCarros = __spreadArray(__spreadArray([], listaCarros, true), ['Corolla', 'Civic', 'Fusion', 'Cruze', 'Onix'], false);
console.log(listaCarros);
// ==> Exemplo 06 - Exemplo de Array com laço de iteração
var linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagensArray);
var frutasArray = new Array('Abacaxi', 'Banana', 'Maçã', 'Pera', 'Uva', 'Melancia', 'Morango');
function funcaoFrutas(frutas) {
    for (var i = 4; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}
funcaoFrutas(frutasArray);
var brinquedos = new Array('Carro', 'Boneca', 'Urso', 'Avião', 'Navio', 'Robô', 'Bicicleta');
function mostrarBrinquedos(brinquedos) {
    for (var i = 1; i < brinquedos.length; i++) {
        console.log(brinquedos[i]);
    }
}
mostrarBrinquedos(brinquedos);
var bichos = new Array('Cachorro', 'Gato', 'Papagaio', 'Peixe', 'Coelho', 'Tartaruga', 'Hamster');
function mostrarBichos(bichos) {
    for (var i = 0; i < bichos.length; i++) {
        console.log(bichos[i]);
    }
}
mostrarBichos(bichos);

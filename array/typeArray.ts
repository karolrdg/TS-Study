// ==> Exemplo 01 - Uso de Colchetes:

let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭']; //🍎
console.log(frutas[2]);

let carros: string[] = ['🚗', '🚙', '🚚', '🚛', '🚜'];//🚜
console.log(carros[4]);

let cidades: string[] = ['Florença', 'Paris', 'Londres', 'Madri', 'Roma'];//Paris
console.log(cidades[1]);

let marcas: string[] = ['Apple', 'Samsung', 'Motorola', 'LG', 'Xiaomi'];//Apple
console.log(marcas[0]);

let livros: string[] = ['O Senhor dos Anéis', 'Harry Potter', 'O Código da Vinci', 'O Pequeno Príncipe', 'Dom Quixote'];//O Pequeno Príncipe
console.log(livros[3]);

// ==> Exemplo 02 - Array Object (Objeto Array):

let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];//🍉
console.log(frutas1[3]);

let carros1: Array<string> = ['🚗', '🚙', '🚚', '🚛', '🚜' ];//🚙
console.log(carros1[1]);

let cidades1: Array<string> = ['Florença', 'Paris', 'Londres', 'Madri', 'Roma'];//Roma
console.log(cidades1[4]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
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

let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length); //4

let idiomas2: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Mandarim', 'Italiano', 'Alemão', 'Japonês', 'Russo'];
console.log(idiomas2.length); //9

// ==> Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

let listaCores = ['Azul', 'Vermelho', 'Verde', 'Amarelo', 'Rosa'];
listaCores = [...listaCores, 'Preto', 'Branco', 'Laranja', 'Roxo', 'Marrom'];
console.log(listaCores);

let listaCarros: string[] = ['Fusca', 'Gol', 'Palio', 'Uno', 'Celta'];
listaCarros = [...listaCarros, 'Corolla', 'Civic', 'Fusion', 'Cruze', 'Onix'];
console.log(listaCarros);

// ==> Exemplo 06 - Exemplo de Array com laço de iteração

let linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]); 
    }
}

funcaoLinguagens(linguagensArray);

let frutasArray:string[] = new Array('Abacaxi', 'Banana', 'Maçã', 'Pera', 'Uva', 'Melancia', 'Morango');

function funcaoFrutas(frutas:string[]) {
    for (let i = 4; i < frutas.length; i++) {
        console.log(frutas[i]); 
    }
}

funcaoFrutas(frutasArray);

let brinquedos: string[] = new Array('Carro', 'Boneca', 'Urso', 'Avião', 'Navio', 'Robô', 'Bicicleta');

function mostrarBrinquedos(brinquedos: string[]) {
    for (let i = 1; i < brinquedos.length; i++) {
        console.log(brinquedos[i]); 
    }
}

mostrarBrinquedos(brinquedos);

let bichosPelucia: string[] = new Array('Cachorro', 'Gato', 'Papagaio', 'Peixe', 'Coelho', 'Tartaruga', 'Hamster');

function mostrarBichos(bichosPelucia: string[]) {
    for (let i = 0; i < bichosPelucia.length; i++) {
        console.log(bichosPelucia[i]); 
    }
}

mostrarBichos(bichosPelucia);


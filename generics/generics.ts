export {};
// Função genérica que retorna um item aleatório de um array
function pegarItemAleatorio<T>(items: T[]): T {
  let indiceAleatorio = Math.floor(Math.random() * items.length);
  return items[indiceAleatorio];
}

// Caixa de frutas
let frutas = [
  'Maçã',
  'Banana',
  'Laranja',
  'Pera',
  'Uva',
  'Manga',
  'Morango',
  'Melancia',
];
let frutaAleatoria = pegarItemAleatorio<string>(frutas);
console.log('Fruta aleatória:' + ' ' + `${frutaAleatoria}`);

// Caixa de animais de estimação
let animaisDeEstimacao = [
  'Cachorro',
  'Gato',
  'Peixe',
  'Papagaio',
  'Hamster',
  'Coelho',
];
let animalAleatorio = pegarItemAleatorio<string>(animaisDeEstimacao);
console.log('Animal de estimação aleatório: ' + animalAleatorio);

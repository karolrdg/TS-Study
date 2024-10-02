// ==> Exemplo 01 - Generics Constraints

export {};

interface Pessoa {
  nome: string;
  idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(
  pessoas: T[],
  idade: number,
): T[] {
  return pessoas.filter((pessoa) => pessoa.idade > idade);
}

const pessoasFiltradas: Pessoa[] = [
  { nome: 'Glaucia', idade: 36 },
  { nome: 'João', idade: 20 },
  { nome: 'Angelica', idade: 30 },
  { nome: 'Maria', idade: 25 },
  { nome: 'José', idade: 18 },
];

const pessoasComIdadeMaiorQue25 = obterPessoaIdadeMaiorQue(
  pessoasFiltradas,
  30,
);

console.log(pessoasComIdadeMaiorQue25);

// ==> Exemplo 02 - Generics Constraints

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
  return objeto[chave];
}

const pessoa4 = prop2({ nome: 'Glaucia' }, 'nome');

console.log(pessoa4);

// Definindo o tipo Fruta com propriedades nome e quantidade
interface Fruta {
  nome: string;
  quantidade: number;
}

/// Definindo o tipo Fruta com propriedades nome e quantidade
interface Fruta {
  nome: string;
  quantidade: number;
}

// Função genérica para obter a quantidade de uma fruta específica
function obterQuantidadeFruta<T extends Fruta>(
  fruteira: T[], // Lista de frutas
  nomeFruta: string, // Nome da fruta que queremos buscar
): number {
  // Encontrando a fruta na fruteira e retornando sua quantidade
  const frutaEncontrada = fruteira.find((fruta) => fruta.nome === nomeFruta);
  return frutaEncontrada ? frutaEncontrada.quantidade : 0; // Retorna a quantidade ou 0 se não encontrada
}

// Criando uma lista de frutas na fruteira
const fruteira: Fruta[] = [
  { nome: 'Maçã', quantidade: 10 },
  { nome: 'Banana', quantidade: 5 },
  { nome: 'Laranja', quantidade: 8 },
];

// Usando a função para obter a quantidade de maçãs
const quantidadeMacas = obterQuantidadeFruta(fruteira, 'Maçã');
console.log(`Quantidade de maçãs: ${quantidadeMacas}`); // Saída: Quantidade de maçãs: 10

// Usando a função para obter a quantidade de bananas
const quantidadeBananas = obterQuantidadeFruta(fruteira, 'Banana');
console.log(`Quantidade de bananas: ${quantidadeBananas}`); // Saída: Quantidade de bananas: 5

// Tentando buscar uma fruta que não está na lista
const quantidadeUvas = obterQuantidadeFruta(fruteira, 'Uva');
console.log(`Quantidade de uvas: ${quantidadeUvas}`); // Saída: Quantidade de uvas: 0

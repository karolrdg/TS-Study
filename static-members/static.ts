// ==> Exemplo 03 - Propriedades estáticas
type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static QTD_CACHORRO_VENDIDO = 0;

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;

    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  public exibirInformacao(): void {
    console.log(`O cachorro ${this.nome} tem ${this.idade} anos e é da raça ${this.racas}.`);
  }
}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);
const cachorro_03 = new Cachorro('Bolinha', 2, ['Pug']);
cachorro_01.exibirInformacao();
cachorro_02.exibirInformacao();

// ==> Exemplo - Propriedades estáticas

// Definindo um tipo chamado "Modelo" que só pode ter esses cinco valores.
// Isso garante que o modelo do carro só pode ser um desses.
type Modelo = 'Sedan' | 'SUV' | 'Hatch' | 'Caminhonete' | 'Conversível';

// Criando a classe Carro, que será o "molde" para fazer os carros.
class Carro {
  // Essas são as propriedades que todo carro vai ter (nome, ano e modelo).
  public nome: string; // Nome do carro (ex.: Civic)
  public ano: number; // Ano de fabricação do carro (ex.: 2021)
  public modelos: Modelo[]; // Lista de modelos do carro, usando o tipo "Modelo"

  // Propriedade estática: Esta pertence à classe e não a cada carro específico.
  // Ela vai contar quantos carros foram vendidos (ou fabricados).
  public static QTD_CARROS_VENDIDOS = 0;

  // O construtor é executado quando criamos um novo carro.
  // Ele define as propriedades (nome, ano, modelos) e aumenta o contador estático.
  constructor(nome: string, ano: number, modelos: Modelo[]) {
    this.nome = nome;  // Define o nome do carro
    this.ano = ano;  // Define o ano de fabricação do carro
    this.modelos = modelos;  // Define o modelo do carro

    // A cada novo carro criado, o contador de carros vendidos é incrementado.
    Carro.QTD_CARROS_VENDIDOS++;
    // Exibe no console quantos carros já foram vendidos/criados.
    console.log(Carro.QTD_CARROS_VENDIDOS);
  }

  // Método público para exibir as informações de um carro específico (nome e ano).
  public exibirInformacao(): void {
    console.log(`O carro ${this.nome} foi fabricado no ano de ${this.ano}.`);
  }
}

// Criando o primeiro carro (nome: Civic, ano: 2021, modelo: Sedan)
const carro_01 = new Carro('Civic', 2021, ['Sedan']);

// Criando o segundo carro (nome: T-Cross, ano: 2023, modelo: SUV)
const carro_02 = new Carro('T-Cross', 2023, ['SUV']);

// Criando o terceiro carro (nome: Strada, ano: 2022, modelo: Caminhonete)
const carro_03 = new Carro('Strada', 2022, ['Caminhonete']);

// Exibindo as informações de cada carro usando o método exibirInformacao().
carro_01.exibirInformacao();  // Mostra: O carro Civic foi fabricado no ano de 2021.
carro_02.exibirInformacao();  // Mostra: O carro T-Cross foi fabricado no ano de 2023.
carro_03.exibirInformacao();  // Mostra: O carro Strada foi fabricado no ano de 2022.

// ==> Exemplo - Livros mágicos

// Imagine que temos diferentes tipos de histórias que os livros podem contar.
// Eles podem ser sobre "Aventura", "Mistério", "Heróis", "Fadas", ou "Dinossauros".
type Genero = 'Aventura' | 'Mistério' | 'Heróis' | 'Fadas' | 'Dinossauros';

// Estamos criando uma "fábrica de livros mágicos", chamada Livro.
class Livro {
  // Cada livro vai ter um nome, o nome da pessoa que escreveu (autor), e o tipo de história (gênero).
  public nome: string; // Nome do livro, como "Histórias do Mundo Mágico"
  public autor: string; // Nome do autor, como "João"
  public generos: Genero[]; // Tipo de história que o livro conta, como "Aventura"

  // Aqui temos uma contagem de quantos livros mágicos já foram criados.
  // Isso é como um contador de brinquedos! Toda vez que criamos um novo livro, esse número aumenta.
  public static TOTAL_LIVROS = 0;

  // O construtor é como uma máquina de brinquedos.
  // Quando você cria um novo livro, ele coloca o nome, o autor e o tipo de história no livro.
  constructor(nome: string, autor: string, generos: Genero[]) {
    this.nome = nome;  // Dá um nome ao livro
    this.autor = autor; // Coloca o nome do autor do livro
    this.generos = generos; // Escolhe o tipo de história que o livro conta

    // A cada livro novo que a gente cria, o contador TOTAL_LIVROS aumenta.
    Livro.TOTAL_LIVROS++;
    // Aqui, ele fala quantos livros mágicos já estão na prateleira!
    console.log(`Nós já criamos ${Livro.TOTAL_LIVROS} livros mágicos!`);
  }

  // Esse é o jeito de "falar" com o livro.
  // Quando você pergunta a ele, ele responde com o nome e quem o escreveu.
  public exibirInformacao(): void {
    console.log(`O livro mágico chamado "${this.nome}" foi escrito por ${this.autor}.`);
  }
}

// Agora, vamos criar três livros mágicos!

// Primeiro, criamos um livro chamado "A Aventura das Fadas", escrito pela Maria.
const livro1 = new Livro('A Aventura das Fadas', 'Maria', ['Fadas', 'Aventura']);

// Depois, criamos um livro chamado "O Mistério do Castelo", escrito pelo Pedro.
const livro2 = new Livro('O Mistério do Castelo', 'Pedro', ['Mistério', 'Heróis']);

// Por último, criamos um livro chamado "Dinossauros no Espaço", escrito pela Ana.
const livro3 = new Livro('Dinossauros no Espaço', 'Ana', ['Dinossauros', 'Aventura']);

// Agora, se a gente pegar qualquer livro da prateleira e perguntar, ele vai dizer quem o escreveu!

livro1.exibirInformacao();  // Ele fala: "O livro mágico chamado 'A Aventura das Fadas' foi escrito por Maria."
livro2.exibirInformacao();  // Ele fala: "O livro mágico chamado 'O Mistério do Castelo' foi escrito por Pedro."
livro3.exibirInformacao();  // Ele fala: "O livro mágico chamado 'Dinossauros no Espaço' foi escrito por Ana."


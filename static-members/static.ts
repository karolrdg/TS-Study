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

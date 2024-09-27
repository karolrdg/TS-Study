export {};
// Interface que define como é um Animal
interface Animal {
  nome: string;
  especie: string;
  idade: number;
}

// Função que exibe as informações do animal
function exibirAnimal(animal: Animal) {
  return `
      Nome do Animal...: ${animal.nome}
      Espécie...: ${animal.especie}
      Idade...: ${animal.idade} anos
    `;
}

// Criando objetos de animais que seguem a interface
const cachorro = {
  nome: 'Bolt',
  especie: 'Cachorro',
  idade: 3,
};

const gato = {
  nome: 'Mia',
  especie: 'Gato',
  idade: 2,
};

// Exibindo informações dos animais
console.log(exibirAnimal(cachorro));
console.log(exibirAnimal(gato));

//ex

// Interface que define as propriedades e métodos de um Animal
interface Animal2 {
  nome: string; // Nome do animal
  idade: number; // Idade do animal
  estaVivo: boolean; // Indica se o animal está vivo
  comer(tipoComida: string): void; // Método para o animal comer
}

// Classe Pato que implementa a interface Animal
class Pato implements Animal2 {
  nome: string;
  idade: number;
  estaVivo: boolean;

  constructor(nome: string, idade: number, estaVivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = estaVivo;
  }

  comer(tipoComida: string): void {
    console.log(`O pato ${this.nome} está comendo ${tipoComida}`);
  }

  nadar(): void {
    console.log(`O pato ${this.nome} está nadando no lago!`);
  }
}

// Criando um objeto da classe Pato
const pato = new Pato('Donald', 3, true);
console.log(pato); // Mostra as informações do pato

// Chamando os métodos
pato.comer('ração'); // O pato está comendo ração
pato.nadar(); // O pato está nadando

//ex
// Interface que define as propriedades e métodos de um Robô
interface Robo {
  nome: string; // Nome do robô
  modelo: string; // Modelo do robô
  baterPapo(): void; // Método para o robô falar
  andar(distancia: number): void; // Método para o robô andar
}

// Classe Robô que implementa a interface Robo
class RoboDancante implements Robo {
  nome: string;
  modelo: string;

  constructor(nome: string, modelo: string) {
    this.nome = nome;
    this.modelo = modelo;
  }

  // Implementação do método baterPapo
  baterPapo(): void {
    console.log(`${this.nome}: Olá! Eu sou o robô modelo ${this.modelo}.`);
  }

  // Implementação do método andar
  andar(distancia: number): void {
    console.log(`${this.nome} está andando ${distancia} metros.`);
  }

  // Método específico para o robô dançar
  dançar(): void {
    console.log(`${this.nome} está dançando! 💃🕺`);
  }
}

// Criando um objeto da classe RoboDancante
const robocop = new RoboDancante('Robocop', 'X1000');
console.log(robocop); // Mostra as informações do robô

// Chamando os métodos
robocop.baterPapo(); // O robô fala
robocop.andar(5); // O robô anda 5 metros
robocop.dançar(); // O robô começa a dançar

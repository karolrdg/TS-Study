export {};

class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
const pessoa = new Pessoa('Glaucia', 'Lemos');
console.log(pessoa.nomeCompleto());

class Carro {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  nomeCompleto(): string {
    return `${this.marca} ${this.modelo}`;
  }
}

// Criando uma instância da classe Carro
const carro = new Carro('Toyota', 'Corolla');
console.log(carro.nomeCompleto());

/*class Estudante_1 {
  codigoEstudante: number;
  nomeEstudante: string;

  // Definir o Construtor
  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

  // Criar o método
  listarEstudante(): void {
    console.log('Código do Estudante...: ' + this.codigoEstudante);
    console.log('Nome do Estudante...: ' + this.nomeEstudante);
  }
}

// Acessar os campos:
const estudante_1 = new Estudante_1(9845, 'Prince Lemos');
console.log(
  'Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante,
);
console.log(
  'Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante,
);
*/

class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

  listarEstudante(): void {
    console.log('Código do Estudante...: ' + this.codigoEstudante);
    console.log('Nome do Estudante...: ' + this.nomeEstudante);
  }
}

// Criar uma instância e testar
const estudante = new Estudante(9845, 'Prince Lemos');
estudante.listarEstudante();

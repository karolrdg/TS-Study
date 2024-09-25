export {};
class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  apresentarPessoa(): string {
    return `Meu nome é ${this.nome} ${this.sobrenome}.`;
  }
}

class Funcionario extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    private funcao: string,
  ) {
    super(nome, sobrenome);
  }

  retornarNome_02(): string {
    return super.apresentarPessoa() + `E, sou ${this.funcao}`;
  }
}

const funcionario = new Funcionario('Glaucia', 'Lemos', 'Developer Advocate');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome_02());

//ex
export {};

class Veiculo {
  constructor(
    private marca: string,
    private modelo: string,
  ) {
    this.marca = marca;
    this.modelo = modelo;
  }

  retornarNomeCompleto(): string {
    return `${this.marca} ${this.modelo}`;
  }

  apresentarVeiculo(): string {
    return `Este veículo é um ${this.marca} ${this.modelo}.`;
  }
}

class Moto extends Veiculo {
  constructor(
    marca: string,
    modelo: string,
    private cilindrada: number,
  ) {
    super(marca, modelo);
  }

  retornarNome_02(): string {
    return super.apresentarVeiculo() + ` Com ${this.cilindrada} cilindradas.`;
  }
}

const moto = new Moto('Yamaha', 'MT-07', 689);
console.log(moto.apresentarVeiculo());
console.log(moto.retornarNomeCompleto());
console.log(moto.retornarNome_02());

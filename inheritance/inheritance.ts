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

/*class Veiculo {
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
*/
//ex
// Classe base: Animal
class Animal {
  constructor(protected nome: string) {
    this.nome = nome;
  }

  // Função que retorna o som genérico de qualquer animal
  fazerSom(): string {
    return `${this.nome} faz algum som!`;
  }
}

// Classe que herda de Animal: Cachorro
class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome); // Chama o construtor da classe Animal
  }

  // Função específica do cachorro que faz "au au"
  fazerSomCachorro(): string {
    return `${this.nome} faz au au!`;
   
  }
}

// Criando um cachorro chamado "Rex"
const meuCachorro = new Cachorro('Rex');
console.log(meuCachorro.fazerSom()); // Isso vem da classe Animal
console.log(meuCachorro.fazerSomCachorro()); // Isso vem da classe Cachorro


// Classe base: Animal
/*class Animal {
  private nome: string; // Propriedade nome é privada

  constructor(nome: string) {
    this.nome = nome;
  }

  // Getter para acessar o nome
  protected getNome(): string {
    return this.nome;
  }

  // Função que retorna o som genérico de qualquer animal
  fazerSom(): string {
    return `${this.getNome()} faz algum som!`;
  }
}

// Classe que herda de Animal: Cachorro
class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome); // Chama o construtor da classe Animal
  }

  // Função específica do cachorro que faz "au au"
  fazerSomCachorro(): string {
    return `${this.getNome()} faz au au!`; // Usando o getter para acessar nome
  }
}

// Criando um cachorro chamado "Rex"
const meuCachorro = new Cachorro('Rex');
console.log(meuCachorro.fazerSom()); // Isso vem da classe Animal
console.log(meuCachorro.fazerSomCachorro()); // Isso vem da classe Cachorro
*/

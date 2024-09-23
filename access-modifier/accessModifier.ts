// ==> Exemplo 01- Modificador: public
class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}

const estudante1 = new Estudante();
estudante1.codigoEstudante = 201;
estudante1.nomeEstudante = 'Glaucia Lemos';

console.log(estudante1);
//console.log(estudante.nomeEstudante);

// ==> Exemplo 02 - Modificadores: private e protected
class EstudantePrivado {
  private codigoEstudante: number; // Propriedade privada
  protected nomeEstudante: string; // Propriedade protegida

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

  // Método público para acessar o código do estudante
  public exibirCodigoEstudante(): number {
    return this.codigoEstudante;
  }
}

// Subclasse de Estudante
class EstudanteAvancado extends EstudantePrivado {
  public exibirNomeEstudante(): string {
    // Pode acessar nomeEstudante porque é protected
    return this.nomeEstudante;
  }
}

// Criando uma instância de Estudante
const estudantePrivado = new EstudantePrivado(201, 'Glaucia Lemos');
console.log(estudantePrivado.exibirCodigoEstudante()); // Funciona
//console.log(estudantePrivado.codigoEstudante)

// Criando uma instância de EstudanteAvancado
const estudanteAvancado = new EstudanteAvancado(202, 'João Silva');
console.log(estudanteAvancado.exibirNomeEstudante()); // Funciona
//console.log(estudanteAvancado.nomeEstudante)

// Erros (tentativas de acessar propriedades privadas e protegidas diretamente)
// console.log(estudantePrivado.codigoEstudante); // Erro: propriedade privada
// console.log(estudanteAvancado.nomeEstudante); // Erro: propriedade protegida
class Funcionario {
  codigoFuncionario: number;
  nomeFuncionario: string;
  private salario: number;

  // Construtor
  constructor(
    codigoFuncionario: number,
    nomeFuncionario: string,
    salario: number,
  ) {
    this.codigoFuncionario = codigoFuncionario;
    this.nomeFuncionario = nomeFuncionario;
    this.salario = salario;
  }

  // Método público para retornar os dados do funcionário
  retornarDadosFuncionario(): string {
    return `Código do Funcionário: ${this.codigoFuncionario}.
        Nome do Funcionário: ${this.nomeFuncionario}.
        Salário do Funcionário: R$ ${this.salario.toFixed(2)}`;
  }
}

// Criar uma instância da classe
const funcionario = new Funcionario(12345, 'João Silva', 5000);

// Exibir os dados do funcionário usando o método público
console.log(funcionario.retornarDadosFuncionario());

// Tentativa de acessar a propriedade privada de fora da classe (isso vai gerar um erro)
// console.log(funcionario.salario); // ERRO! 'salario' é privado

//mais ex
class ContaBancaria {
  private saldo: number; // Propriedade privada

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial; // Atribuindo o saldo inicial
  }

  // Método para depositar dinheiro
  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor; // Aumenta o saldo
      console.log(`Depósito de R$${valor} realizado com sucesso!`);
    } else {
      console.log('Valor do depósito deve ser positivo!');
    }
  }

  // Método para sacar dinheiro
  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor; // Diminui o saldo
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    } else {
      console.log('Saldo insuficiente ou valor inválido!');
    }
  }

  // Método para consultar o saldo
  consultarSaldo(): number {
    return this.saldo; // Retorna o saldo
  }
}

// Criando uma conta
const minhaConta = new ContaBancaria(1000);

// Realizando operações
minhaConta.depositar(2000); // Depósito de R$200 realizado com sucesso!
minhaConta.sacar(4000); // Saque de R$150 realizado com sucesso!
console.log(`Saldo atual: R$${minhaConta.consultarSaldo()}`); // Saldo atual: R$1050

// Tentando acessar o saldo diretamente
// console.log(minhaConta.saldo); // ERRO! Não pode acessar diretamente

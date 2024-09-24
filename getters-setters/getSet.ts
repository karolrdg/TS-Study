export {};
class Estudante_01 {
  nome: string;
  semestre: number;
  curso: string;

  constructor(
    nomeEstudante: string,
    semestreEstudante: number,
    cursoEstudante: string,
  ) {
    this.nome = nomeEstudante;
    this.semestre = semestreEstudante;
    this.curso = cursoEstudante;
  }

  public get cursoEstudante() {
    return this.curso;
  }

  public set cursoEstudante(setCurso: string) {
    this.curso = setCurso;
  }
}

const estudante_01 = new Estudante_01(
  'Glaucia Lemos',
  5,
  'Sistema da Informação',
);
console.log(estudante_01);

// Setter call
estudante_01.cursoEstudante = 'Análise e Desenvolvimento de Sistemas';

// Getter call
console.log('Curso atualizado...:', estudante_01.cursoEstudante);

//ex

export {};

class Produto {
  nome: string;
  quantidade: number;
  private preco: number;

  constructor(
    nomeProduto: string,
    quantidadeProduto: number,
    precoProduto: number,
  ) {
    this.nome = nomeProduto;
    this.quantidade = quantidadeProduto;
    this.preco = precoProduto;
  }

  // Getter para acessar o preço do produto
  public get precoProduto() {
    return this.preco;
  }

  // Setter para alterar o preço do produto
  public set precoProduto(novoPreco: number) {
    if (novoPreco < 0) {
      console.log('Preço inválido! O preço deve ser maior que zero.');
    } else {
      this.preco = novoPreco;
    }
  }
}

// Criando um novo produto
const produto_01 = new Produto('Notebook', 10, 2500);
console.log(produto_01);

// Usando o getter para obter o preço
console.log('Preço do produto:', produto_01.precoProduto);

// Alterando o preço usando o setter
produto_01.precoProduto = 2700;
console.log('Preço atualizado do produto:', produto_01.precoProduto);

// Tentando definir um preço inválido
produto_01.precoProduto = -300; // O setter vai bloquear esse valor

// Verificando o preço final após a tentativa de alteração
console.log('Preço final do produto:', produto_01.precoProduto);

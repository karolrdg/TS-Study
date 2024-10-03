export {};
class Estudante<T, U> {
  private id: T;
  private nome: U;

  setValor(id: T, nome: U): void {
    this.id = id;
    this.nome = nome;
  }

  retornarValor(): void {
    console.log(
      `Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`,
    );
  }
}

const estudante = new Estudante<number, string>();

estudante.setValor(101, 'Glaucia Lemos');
estudante.retornarValor();

const estudanteSecundario = new Estudante<string, string>();

estudanteSecundario.setValor('201', 'Jurema Lemos');
estudanteSecundario.retornarValor();

//++

class Livro<T, U> {
  private codigo: T;
  private titulo: U;

  // Método para definir o código e o título do livro
  setDetalhes(codigo: T, titulo: U): void {
    this.codigo = codigo;
    this.titulo = titulo;
  }

  // Método para exibir os detalhes do livro
  exibirDetalhes(): void {
    console.log(
      `Código do Livro: ${this.codigo}, Título do Livro: ${this.titulo}`,
    );
  }
}

// Criando um livro com código numérico e título string
const livro1 = new Livro<number, string>();

livro1.setDetalhes(101, 'O Senhor dos Anéis');
livro1.exibirDetalhes(); // Saída: Código do Livro: 101, Título do Livro: O Senhor dos Anéis

// Criando outro livro com código string e título string
const livro2 = new Livro<string, string>();

livro2.setDetalhes('A-202', 'Harry Potter e a Pedra Filosofal');
livro2.exibirDetalhes(); // Saída: Código do Livro: A-202, Título do Livro: Harry Potter e a Pedra Filosofal

// Criando mais um livro com código numérico e título string
const livro3 = new Livro<number, string>();

livro3.setDetalhes(303, 'A Guerra dos Tronos');
livro3.exibirDetalhes(); // Saída: Código do Livro: 303, Título do Livro: A Guerra dos Tronos


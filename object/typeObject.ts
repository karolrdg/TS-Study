export {};

//basico Object
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(pessoa);

//Object com tipagem
const pessoa2: {
  nome: string;
  sobrenome: string;
  idade: number;
} = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(typeof pessoa2);
console.log(pessoa2);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function criarPessoa(nome: string, sobrenome: string, idade: number) {
  return {
    nome,
    sobrenome,
    idade,
  };
}
const pessoa3 = criarPessoa('Luiz', 'Miranda', 30);
console.log(pessoa3);
console.log(typeof pessoa3);

// ==> Exemplo 03 -> object como parâmetros de função (eles podem ser anônimos)
function criarPessoa2(dados: {
  nome: string;
  sobrenome: string;
  idade: number;
}) {
  return (
    'Dados informativos do ' +
    dados.nome +
    ' ' +
    dados.sobrenome +
    ' ' +
    dados.idade +
    ' anos'
  );
}
console.log(criarPessoa2({ nome: 'Luiz', sobrenome: 'Miranda', idade: 30 }));

// ==> Exemplo 03 -> object nomeados
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    }
function criarPessoa3(dados: Pessoa) {
  return (
    'Dados informativos do ' +
    dados.nome +
    ' ' +
    dados.sobrenome +
    ' ' +
    dados.idade +
    ' anos'
  );
}
console.log(criarPessoa3({ nome: 'Luiz', sobrenome: 'Miranda', idade: 30 }));

// Definindo a interface Livro, que será o molde para os objetos do tipo Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string; // Nova propriedade
}

function criarLivro(dados: Livro) {
    return (
        'Livro: "' +
        dados.titulo +
        '", Autor: ' +
        dados.autor +
        ', Publicado em: ' +
        dados.anoPublicacao +
        ', Editora: ' +
        dados.editora
    );
}

console.log(criarLivro({ titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605, editora: 'Francisco de Robles' }));



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

console.log(
  criarLivro({
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    anoPublicacao: 1605,
    editora: 'Francisco de Robles',
  }),
);

//+exemplos: https://www.typescriptlang.org/docs/handbook/interfaces.html
/*interface Person {
    //      ^^^^^^
    name: string;
    age: number;
  }
  
  function greet(person: Person) {
    return "Hello, " + person.name + ' ' + person.age + ' years old';
  }
console.log(greet({ name: "John", age: 30 }));*/

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)

interface Livro2 {
  readonly titulo: string;
  autor: string;
  anoPublicacao: number;
  editora: string;
}
function criarLivro2(dados: Livro2) {
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
    console.log(
        criarLivro2({
            titulo: 'Dom Quixote',
            autor: 'Miguel de Cervantes',
            anoPublicacao: 1605,
            editora: 'Francisco de Robles',
        }),
    );

    //+type alias

    //// ==> Exemplo 07 -> tipos de extensões (heranças)
interface Mae {
    nome: string;
  }
  
  interface Pai {
    sobrenome: string;
  }
  
  interface Filha extends Mae, Pai {
    idade: number;
  }
  
  const filha: Filha = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 35
  }
  
  console.log(filha);
  
  interface Veiculo {
    marca: string;
  }
  
  interface Motor {
    tipo: string;
  }
  
  interface Carro extends Veiculo, Motor {
    modelo: string;
    ano: number;
  }
  
  const meuCarro: Carro = {
    marca: 'Toyota',
    tipo: 'Elétrico',
    modelo: 'Prius',
    ano: 2022
  }
  
  console.log(meuCarro);
  
    


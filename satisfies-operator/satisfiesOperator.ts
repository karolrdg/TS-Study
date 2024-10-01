export {};
// Definindo o tipo Cidade, que pode ser uma string ou um objeto com coordenadas
type Cidade = NomeCidade | CidadeCoordenadas;

// Definindo o tipo NomeCidade como um conjunto de strings (nomes de cidades)
type NomeCidade =
  | 'São Paulo'
  | 'Rio de Janeiro'
  | 'Salvador'
  | 'Belo Horizonte'
  | 'Içara'; 

// Definindo o tipo CidadeCoordenadas como um objeto com as propriedades x e y
type CidadeCoordenadas = {
  x: number;
  y: number;
};

// Definindo o tipo Pessoa, que tem local de nascimento e residência atual, ambos do tipo Cidade
type Pessoa = {
  localNascimento: Cidade;
  residenciaAtual: Cidade;
};

// Criando o objeto pessoa que satisfaz o tipo Pessoa
const pessoa = {
  localNascimento: 'Içara', //Nome da cidade como string (NomeCidade)
  residenciaAtual: { x: 10, y: 20 }, // Coordenadas da cidade (CidadeCoordenadas)
} satisfies Pessoa; // Verificação de que o objeto atende às regras do tipo Pessoa

// Imprimindo o nome da cidade de nascimento em maiúsculas
console.log(pessoa.localNascimento.toUpperCase()); // IÇARA

// outro ex
type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolsize: number
): Connection;

type Configuration = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10,
} satisfies Configuration;

function connect() {
  let { host, port, tryReconnect } = config;

  createConnection(host, `${port}`, tryReconnect(), 10);
}

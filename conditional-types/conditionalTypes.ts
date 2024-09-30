export = {};

// ==> Exemplo 01 - Conditional Types
type Pessoa = {
  nome: string;
  idade: number;
  endereco: string;
};

type Empresa = {
  nome: string;
  cnpj: number;
};

type EnderecoPessoa = {
  enderecoSecundario: string;
  cidade: string;
  pais: string;
};

type EnderecoEmpresa = {
  localizacao: 'rua' | 'avenida' | 'praça';
};

type EnderecoFinal<T> = T extends { endereco: string }
  ? EnderecoPessoa
  : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
  enderecoSecundario: 'Rua 2',
  cidade: 'São Paulo',
  pais: 'Brasil',
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
  localizacao: 'rua',
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

// ==> Exemplo 02 - Conditional Types

type Carro = {
  marca: string;
  modelo: string;
  portas: number;
};

type Moto = {
  marca: string;
  cilindradas: number;
};

type LicencaCarro = {
  categoria: 'B';
  obrigatorioSeguro: boolean;
};

type LicencaMoto = {
  categoria: 'A';
  obrigatorioCapacete: boolean;
};

// Aqui, criamos um tipo condicional que verifica se o tipo tem um número de portas (é um carro)
// e retorna a licença adequada, ou se é uma moto, retornando outro tipo de licença.
type TipoLicenca<T> = T extends { portas: number } ? LicencaCarro : LicencaMoto;

// Agora vamos aplicar o tipo condicional:
const licencaCarro: TipoLicenca<Carro> = {
  categoria: 'B',
  obrigatorioSeguro: true,
};

const licencaMoto: TipoLicenca<Moto> = {
  categoria: 'A',
  obrigatorioCapacete: true,
};

console.log(licencaCarro); // { categoria: 'B', obrigatorioSeguro: true }
console.log(licencaMoto); // { categoria: 'A', obrigatorioCapacete: true }

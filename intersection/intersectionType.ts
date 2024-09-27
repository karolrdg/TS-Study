export {};
//ex
// Interface com os dados básicos de um veículo
interface DadosVeiculo {
  marca: string;
  modelo: string;
  ano: number;
}

// Interface com os dados do proprietário do veículo
interface Proprietario {
  nome: string;
  idade: number;
}

// Interface com informações adicionais de seguro
interface Seguro {
  apolice: string;
  validade: string;
}

// Tipo que combina as interfaces DadosVeiculo, Proprietario e Seguro
type VeiculoCompleto = DadosVeiculo & Proprietario & Seguro;

// Objeto com todos os dados combinados de um veículo e seu proprietário
const carro: VeiculoCompleto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020,
  nome: 'Carlos Silva',
  idade: 35,
  apolice: '123456789',
  validade: '12/2025',
};

console.log(carro);

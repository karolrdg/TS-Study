export {};
// Interface Coelho com a propriedade nome
interface Coelho {
  nome: string; // Nome do coelho
  cor: string; // Cor do coelho
}

// Interface Hamster com a propriedade nome
interface Hamster {
  nome: string; // Nome do hamster
  tipo: string; // Tipo do hamster
}

// Interface AnimalDeEstimacao que estende as interfaces Coelho e Hamster
interface AnimalDeEstimacao extends Coelho, Hamster {
  idade: number; // Idade do animal de estimação
}

// Criando um objeto pet do tipo AnimalDeEstimacao
const pet: AnimalDeEstimacao = {
  nome: 'Bunny', // Nome do animal
  cor: 'Branco', // Cor do coelho
  tipo: 'Siberiano', // Tipo do hamster
  idade: 2, // Idade do animal
};

// Exibindo as informações do animal de estimação no console
console.log(pet);

// ==> Exemplo 03 - Uso do Omit

// Interface Funcionario que define as propriedades básicas de um funcionário
interface Funcionario {
  id: number; // ID do funcionário
  nome: string; // Nome do funcionário
  salario: number; // Salário do funcionário
}

// Interface Desenvolvedor que estende Funcionario
// Omit remove as propriedades 'id' e 'salario' de Funcionario
interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
  salario: string; // Salário do desenvolvedor (como string)
  id: string; // ID do desenvolvedor (agora uma string)
  linguagemProgramacao: string; // Linguagem de programação que o desenvolvedor usa
}

// Criando um objeto desenvolvedor do tipo Desenvolvedor
const desenvolvedor: Desenvolvedor = {
  id: 'js-123', // ID do desenvolvedor
  nome: 'Glaucia Lemos', // Nome do desenvolvedor
  salario: '10000', // Salário do desenvolvedor (como string)
  linguagemProgramacao: 'JavaScript', // Linguagem de programação
};

// Exibindo as informações do desenvolvedor no console
console.log(desenvolvedor);

/*interface Funcionario {
  id: number | string;
  nome: string;
  salario: number | string;
}

interface Desenvolvedor extends Funcionario {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Glaucia Lemos',
  salario: '10k',
  linguageProgramacao: 'JavaScript',
};

console.log(desenvolvedor);*/

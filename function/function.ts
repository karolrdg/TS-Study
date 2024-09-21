// ==> Exemplo 03 - (Arrow Function Expression)
const saudar_03 = (mensagem: string) => {
  return mensagem;
};

console.log(saudar_03('Fala, Pessoal!'));

//ex
const saudarPessoa = (nome: string): string => `Olá, ${nome}! Como você está?`;
console.log(saudarPessoa('Maria')); // Saída: Olá, Maria! Como você está?
console.log(saudarPessoa('João')); // Saída: Olá, João! Como você está?


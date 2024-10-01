"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criando o objeto pessoa que satisfaz o tipo Pessoa
var pessoa = {
    localNascimento: 'Içara', //Nome da cidade como string (NomeCidade)
    residenciaAtual: { x: 10, y: 20 }, // Coordenadas da cidade (CidadeCoordenadas)
}; // Verificação de que o objeto atende às regras do tipo Pessoa
// Imprimindo o nome da cidade de nascimento em maiúsculas
console.log(pessoa.localNascimento.toUpperCase()); // IÇARA

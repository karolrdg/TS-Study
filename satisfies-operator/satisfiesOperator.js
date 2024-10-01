"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criando o objeto pessoa que satisfaz o tipo Pessoa
var pessoa = {
    localNascimento: 'Içara', //Nome da cidade como string (NomeCidade)
    residenciaAtual: { x: 10, y: 20 }, // Coordenadas da cidade (CidadeCoordenadas)
}; // Verificação de que o objeto atende às regras do tipo Pessoa
// Imprimindo o nome da cidade de nascimento em maiúsculas
console.log(pessoa.localNascimento.toUpperCase()); // IÇARA
var config = {
    host: "localhost",
    port: 3306,
    tryReconnect: function () { return true; },
    poolSize: 10,
};
function connect() {
    var host = config.host, port = config.port, tryReconnect = config.tryReconnect;
    createConnection(host, "".concat(port), tryReconnect(), 10);
}

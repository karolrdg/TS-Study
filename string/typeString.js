//ex1
var nome = 'João';
console.log(nome);
var funcaoEmpresa = 'Desenvolvedor';
console.log(funcaoEmpresa);
var nomeEmpresa = 'Empresa X';
console.log(nomeEmpresa);
var dadosFuncionario = "".concat(nome, " trabalha como ").concat(funcaoEmpresa, " na empresa ").concat(nomeEmpresa);
console.log(dadosFuncionario);
//ex2
var modeloCarro = 'Ferrari';
var corCarro = 'Vermelho';
var placaCarro = 'ABC-1234';
var dadosCarro = "O carro \u00E9 um ".concat(modeloCarro, " de cor ").concat(corCarro, " e placa ").concat(placaCarro);
console.log(dadosCarro);
//ex3
var nomeCliente = 'João Soares';
var cidade = 'São Paulo';
var estado = 'SP';
var pais = 'Brasil';
var rua = 'Av. Paulista';
var cep = '01310-100';
var dadosEndereco = "".concat(nomeCliente, " mora na ").concat(rua, ", ").concat(cidade, " - ").concat(estado, ", ").concat(pais, " - CEP: ").concat(cep);
console.log(dadosEndereco);
//ex4
var nomeBanda = 'Metallica';
var generoMusical = 'Heavy Metal/Thrash Metal';
var anoFormacao = '1981';
var paisOrigem = 'Estados Unidos';
var nomeIntegrantes = 'James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo';
var dadosBanda = "".concat(nomeBanda, " \u00E9 uma banda de ").concat(generoMusical, " formada em ").concat(anoFormacao, " nos ").concat(paisOrigem, ". Atualmente, a banda \u00E9 composta por ").concat(nomeIntegrantes, ".");
console.log(dadosBanda);
//ex5
var nomeAtor = 'Keanu Reeves';
var dataNascimento = '02/09/1964';
var cidadeNascimento = 'Beirute';
var paisNascimento = 'Líbano';
var nomePersonagem = 'Neo';
var filme = 'Matrix';
var dadosAtor = "".concat(nomeAtor, " nasceu na data de ").concat(dataNascimento, " na cidade de ").concat(cidadeNascimento, ", que pertence ao ").concat(paisNascimento, ". O ator \u00E9 conhecido por interpretar o personagem ").concat(nomePersonagem, " no filme ").concat(filme, ".");
console.log(dadosAtor);

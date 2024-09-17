// ==> Exemplo 01 - funções:

function logError(errorMessage: string): void {
  console.log(errorMessage);
  // return errorMessage;
}

logError('Required field - Name!');

// ==> Exemplo 02 - funções:

const logErrorExample2 = (errorMessage: string): void => {
  console.log(errorMessage);
};

logErrorExample2('Required field - Surname');

// ==> Exemplo void: variáveis

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);

//ex
function sendNotification(message: string): void {
  console.log(`Notificação enviada: ${message}`);
}

sendNotification('Você tem uma nova mensagem!');
//ex
function gritarSanduichePronto(): void {
  console.log("O sanduíche está pronto!");
}

const sanduicheEntregue = gritarSanduichePronto();
console.log(sanduicheEntregue); // Isso mostra "undefined" (nada foi entregue)
//ex
function falarQueAchouBola(): void {
  console.log("Achei a bola!");
}

const resposta = falarQueAchouBola(); // O robô diz que achou a bola, mas não te entrega nada
console.log(resposta); // Mostra "undefined" no console, porque ele não entregou nada
//ex
function gritarBingo(): void {
  console.log("Bingo!");
}

const bingo = gritarBingo();
console.log(bingo); // Isso mostra "undefined" (nada foi entregue)
//ex
function verificarEAvisarCaixaDeCorreio(): void {
  console.log("Não tem nenhuma carta!");
}

const resultado2 = verificarEAvisarCaixaDeCorreio(); // O robô avisa, mas não te entrega nada
console.log(resultado2); // Mostra "undefined" no console, porque ele não entregou nada

//ex
function fazerTruqueSemEntregarCoelho(): void {
  console.log("O mágico tirou o coelho da cartola!");
}

const resultado3 = fazerTruqueSemEntregarCoelho(); // O mágico faz o truque, mas não te entrega o coelho
console.log(resultado3); // Mostra "undefined" no console, porque ele não te deu nada




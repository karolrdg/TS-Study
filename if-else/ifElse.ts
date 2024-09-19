//if
const numeroMax = 100;
let contador = 99; 

if (contador < numeroMax) {
 contador++;
}

console.log(contador);

//if else
const temperatura = 30; 

if (temperatura > 25) {
  console.log("Está quente. Use roupas leves.");
} else {
  console.log("Está fresco. Você pode usar roupas normais.");
}

//if else if
const temperaturaAtual = 9; 

if (temperaturaAtual > 30) {
  console.log("Está muito quente. Fique em casa e se hidrate.");
} else if (temperaturaAtual > 20) {
  console.log("Está agradável. Um passeio ao ar livre seria ótimo.");
} else if (temperaturaAtual > 10) {
  console.log("Está fresco. Lembre-se de se agasalhar.");
} else {
  console.log("Está frio. Use roupas bem quentes.");
}

// ==> Ternário
const numero = 10;
const resultado1 = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado1);

const horaAtual = 15; // Representa a hora atual (24 horas)

const statusLoja = horaAtual >= 9 && horaAtual <= 18 ? "Loja aberta" : "Loja fechada";

console.log(statusLoja);


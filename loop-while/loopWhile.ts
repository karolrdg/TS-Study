let moedas = 10;

while (moedas > 5) {
  console.log(`Você ainda tem ${moedas} moedas no cofrinho.`);
  moedas--;
}

console.log("Cofrinho vazio! Todas as moedas foram contadas.");

let numero1 = 10;

while (numero1 <= 50) {
  if (numero1 % 7 == 0) {
    console.log('O primeiro número múltiplo de 7 entre 10 e 50 é...: ', numero1);
    break;
  }
  numero1++;
}

let contadorCidade = 0;
const cidadesBr: string[] = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília'];

while (cidadesBr[contadorCidade]) {
  console.log('Cidade...: ', cidadesBr[contadorCidade]);
  contadorCidade++;
}

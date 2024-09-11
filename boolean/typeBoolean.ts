let tarefaConcluida: boolean = true;
console.log(tarefaConcluida);

let tarefaPendente: boolean = false;
console.log(tarefaPendente);

let concluido: boolean = false;
console.log(concluido);

if (concluido) {
  console.log("Tarefa concluída");
} else {
  console.log("Tarefa pendente");
}

let logado: boolean = false;
console.log(logado);

if (!logado) {
  console.log("Usuário logado");
} else {
  console.log("Usuário não logado");
}

let estaAtivo: boolean = false;
console.log(estaAtivo);

if (!estaAtivo) {
  console.log("Ativo");
} else {
  console.log("Inativo");
}

let texto1: string = 'Olá';
let texto2: string = 'Oláaaa';
let saoIguais: boolean = (texto1 === texto2);

console.log(`Os textos são iguais?`, saoIguais); 

if (!saoIguais) {
    console.log('Os textos são iguais');
} else {
    console.log('Os textos são diferentes');
}

let emEstoque: boolean = true;
console.log(emEstoque);

if (emEstoque) {
    console.log('Produto em estoque');
} else {
    console.log('Produto fora de estoque');
}

let valor: number = 5;
let isPositivo: boolean = (valor > 0);

console.log(`O valor é positivo?`, isPositivo);  

if (isPositivo) {
    console.log('O valor é positivo');
} else {
    console.log('O valor é negativo ou zero');
}


var tarefaConcluida = true;
console.log(tarefaConcluida);
var tarefaPendente = false;
console.log(tarefaPendente);
var concluido = false;
console.log(concluido);
if (concluido) {
    console.log("Tarefa concluída");
}
else {
    console.log("Tarefa pendente");
}
var logado = false;
console.log(logado);
if (!logado) {
    console.log("Usuário logado");
}
else {
    console.log("Usuário não logado");
}
var estaAtivo = false;
console.log(estaAtivo);
if (!estaAtivo) {
    console.log("Ativo");
}
else {
    console.log("Inativo");
}
var texto1 = 'Olá';
var texto2 = 'Oláaaa';
var saoIguais = (texto1 === texto2);
console.log("Os textos s\u00E3o iguais?", saoIguais);
if (!saoIguais) {
    console.log('Os textos são iguais');
}
else {
    console.log('Os textos são diferentes');
}
var emEstoque = true;
console.log(emEstoque);
if (emEstoque) {
    console.log('Produto em estoque');
}
else {
    console.log('Produto fora de estoque');
}
var valor = 5;
var isPositivo = (valor > 0);
console.log("O valor \u00E9 positivo?", isPositivo);
if (isPositivo) {
    console.log('O valor é positivo');
}
else {
    console.log('O valor é negativo ou zero');
}

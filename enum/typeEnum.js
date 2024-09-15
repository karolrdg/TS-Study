// ==> Exemplo 04: Quando usar enum?!
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
var concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');
}
//ex
// ==> Exemplo 05: Usando enum para status de um pedido
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Processando"] = 1] = "Processando";
    StatusPedido[StatusPedido["Enviado"] = 2] = "Enviado";
    StatusPedido[StatusPedido["Entregue"] = 3] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 4] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
var pedido = {
    id: 101,
    status: StatusPedido.Cancelado,
    descricao: 'Pedido de compra de livros.',
};
// Verificando o status do pedido
if (pedido.status === StatusPedido.Enviado) {
    console.log('O pedido foi enviado! Acompanhe o rastreamento.');
}
else if (pedido.status === StatusPedido.Entregue) {
    console.log('O pedido já foi entregue ao cliente.');
}
else if (pedido.status === StatusPedido.Cancelado) {
    console.log('O pedido foi cancelado.');
}
else {
    console.log('O pedido ainda está sendo processado.');
}

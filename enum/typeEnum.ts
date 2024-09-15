// ==> Exemplo 04: Quando usar enum?!
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!');
}

//ex
// ==> Exemplo 05: Usando enum para status de um pedido
enum StatusPedido {
  Pendente,
  Processando,
  Enviado,
  Entregue,
  Cancelado,
}

const pedido = {
  id: 1,
  status: StatusPedido.Enviado,
  descricao: 'Pedido de exemplo',
}

// Verificando o status do pedido
if (pedido.status === StatusPedido.Pendente) {
  console.log('Pedido Pendente');
} else if (pedido.status === StatusPedido.Processando) {
  console.log('Pedido em Processamento');
} else if (pedido.status === StatusPedido.Enviado) {
  console.log('Pedido Enviado');
} else if (pedido.status === StatusPedido.Entregue) {
  console.log('Pedido Entregue');
} else if (pedido.status === StatusPedido.Cancelado) {
  console.log('Pedido Cancelado');
}



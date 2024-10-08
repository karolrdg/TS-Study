// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
  console.log('Id Funcionário: ', idPessoa, 'Nome: ', nome);

  if (email != undefined) console.log('E-mail: ', email);
}

informarDadosPessoa(775544, 'Glaucia Lemos');
informarDadosPessoa(994411, 'Jurema Lemos', 'jurema@example.com');
informarDadosPessoa(112233, 'Glaucia L')

// ==> Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString();

  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}

mensagemLog('Atualizar Página,', 112233);
mensagemLog('Usuário(a) logado(a) com sucesso');

// ==> Exemplo 03

type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoa3: Pessoa;

pessoa3 = {
  idFuncionario: 112233,
  nome: 'Glaucia Lemos',
};

console.log(pessoa3);

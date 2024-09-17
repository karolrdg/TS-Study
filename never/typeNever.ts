/*// Function that throws an error
function throwError(message: string): never {
    throw new Error(message);
}

// Function that runs an infinite loop
function infiniteLoop(): never {
    while (true) {}
}

// Example of a function that returns never due to exhaustive checks
type SomeType = 'A' | 'B' | 'C';

function checkType(value: SomeType): string {
    switch (value) {
        case 'A':
            return 'Type A';
        case 'B':
            return 'Type B';
        case 'C':
            return 'Type C';
        default:
            const exhaustiveCheck: never = value;
            return exhaustiveCheck; // This line will never be reached
    }
}

*/

/*// ==> Exemplo 01: Never - Throw Exception

function error(message: string): never {
    throw new Error(message);
  }
  
  console.log(error('Erro de Mensagem - 01'));
  
  // ==> Exemplo 02: Never inferido automaticamente
  function rejectMessage() {
    return error('Error de Mensagem - 02');
  }
  
  console.log(rejectMessage());
  
  // ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'
  
  const loopInfinito = function loop() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      console.log('Oi, Developers!');
    }
  };
  
  // console.log(loopInfinito());
  
  // ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'
  
  const algumaCoisaVoid: void = null;
  
  // ==> dará erro! (// Error: Type 'null' is not assignable to type 'never')
  // const algumaCoisaNever: never = null;
  
  //console.log(algumaCoisaVoid);
  //console.log(algumaCoisaNever);
*/
/* //ex
  function caixaMagica(mensagem: string): never {
    throw new Error(mensagem);
  }
  
  console.log(caixaMagica('Ocorreu um erro!'));*/

//ex
const caixaInfinita = function () {
  // Loop infinito, como uma caixa mágica que nunca para
  while (true) {
    console.log('Esta caixa nunca para!');
  }
};

//console.log(caixaInfinita());

for (let i = 0; i < 10; i++) {
    console.log(`Iteration number: ${i}`);
}

//LOOP FOR IN
const inventarioBrinquedos: { [key: string]: number } = {
    "Carrinho": 5,
    "Boneca": 3,
    "Lego": 7,
    "Bola": 2,
    "Robô": 4
  };
  
  for (let brinquedo in inventarioBrinquedos) {
    console.log(`Você tem ${inventarioBrinquedos[brinquedo]} unidades de ${brinquedo}.`);
  }
  
  


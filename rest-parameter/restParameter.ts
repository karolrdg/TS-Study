function listarFilmes(frase: string, ...filmes: string[]): string {
    return frase + ' ' + filmes.join(', ');
  }
  
  // Chamando a função
  console.log(
    listarFilmes(
      'Aqui estão alguns filmes que eu recomendo:',
      'A Origem',
      'O Poderoso Chefão',
      'Matrix',
      'Parasita'
    ),
  );
  
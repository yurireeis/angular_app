angular.module("listaTelefonica").filter("name", function () {
  // criando um filtro para deixar a primeira letra da palavra maiúscula
  // o primeiro parâmetro sempre será o input
  return function (input) {
    var listaDeNomes = input.split(" ");
    var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
      if (/(da|de)/.test(nome)) return nome;
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    // faz o join das palavras quando separadas por um espaçamento
    return listaDeNomesFormatada.join(" ");
  };
});

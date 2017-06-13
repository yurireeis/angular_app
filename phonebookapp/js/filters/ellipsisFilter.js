angular.module("listaTelefonica").filter("ellipsis", function () {

  return function (input, size) {
    // setando o limite de caracters para a inclusão da ellipsis
    // para chamar o segundo parâmetor basta botar : e informar o valor
    if (input.length <= size) return input;
    // logo abaixo se size for evaluado como false o default será 6
    var output = input.substring(0, size || 6) + " ...";
    return output;
  };

});

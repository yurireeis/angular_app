angular.module("listaTelefonica").directive("uiAlert", function () {

  return {
    templateUrl: "view/alert.html",
    replace: true,
    restrict: "A",
    scope: {
      // a propriedade topic está vinculada ao escopo da diretiva
      title: "@",
      message: "="
    },
    transclude: true
  };

});

angular.module("listaTelefonica").directive("uiDate", function($filter) {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ctrl){

      var _formatDate = function (data) {

        data = data.replace(/[^0-9]+/g, "");

        if (data.length > 2) {
          data  = data.substring(0, 2) + "/" + data.substring(2);
        }
        if (data.length > 5) {
          data = data.substring(0, 5) + "/" + data.substring(5, 9);
        }

        return data;

      }

      element.bind("keyup", function () {
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
        ctrl.$render();
      });

      /*
      * parsers.push serve para setar em que momento esse valor
      * será passado para o $scope.
      */
      ctrl.$parsers.push(function (value) {
        if(value.length === 10) {
          var dataArray = value.split("/");
          // irá retornar em milisegundos abaixo
          return new Date(dataArray[2], dataArray[1]-1, dataArray[0]);
        }
      });

      // abaixo a transformação do valor
      ctrl.$formatters.push(function (value) {
        return $filter("date")(value, "dd/MM/yyyy");
      });

    }
  };

});

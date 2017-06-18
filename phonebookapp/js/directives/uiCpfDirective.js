angular.module("listaTelefonica").directive("uiCpf", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attr, ctrl) {

      var _formatCPF = function (cpf) {

        cpf = cpf.replace(/[^0-9]/g, "");

        if (cpf.length > 3) {
            cpf = cpf.substring(0, 3) + "." + cpf.substring(3);
        }

        if (cpf.length > 7) {
            cpf = cpf.substring(0, 7) + "." + cpf.substring(7, 12);
        }

        if (cpf.length > 11) {
            cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 13);
        }

        return cpf;

      };

      element.bind("keyup", function(){
        ctrl.$setViewValue(_formatCPF(ctrl.$viewValue));
        ctrl.$render();
      });

      ctrl.$parsers.push(function (value) {
          if(value.length === 14) return value;
      });

    }

  };
});

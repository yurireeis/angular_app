/**
 * Created by yreis on 6/16/17.
 */
angular.module("listaTelefonica").directive("uiCep", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatCep = function (cep) {

                cep = cep.replace(/[^0-9]+/g, "");

                if (cep.length > 2) {
                    cep = cep.substring(0, 2) + "." + cep.substring(2, 5);
                }

                if (cep.length > 5) {
                    debugger;
                    cep = cep.substring(0, 6) + "-" + cep.substring(6, 10);
                }

                return cep;

            }

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCep(ctrl.$viewValue));
                ctrl.$render();

            });

        }
    };
});
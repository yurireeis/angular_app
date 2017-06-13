angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
	// através do setLength eu criei um serviço configurável
	serialGeneratorProvider.setLength(100);
});

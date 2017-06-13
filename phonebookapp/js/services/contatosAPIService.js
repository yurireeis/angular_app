angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		// abaixo uma promise
		return $http.get(config.baseUrl + "/contatos");
	};

	var _saveContato = function (contato) {
		// abaixo uma promise
		return $http.post(config.baseUrl + "/contatos", contato);
	};

	// abaixo o retorno é um objeto que contém as funções getContatos e saveContato
	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});

import domain.services.sql.connector as connector


class Contato(object):
    id = None
    data = None

    def __init__(self, nome, telefone):
        self.nome = nome
        self.telefone = telefone


class ContatoQuery(connector.Query):
    def find_by_name(self, name):
        self._filter(Contato.nome == name)
        return self


class ContatoRepository(connector.Repository):
    _entity_class = Contato
    _query_class = ContatoQuery

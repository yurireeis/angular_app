import json
import knot
from flask import Flask, request, jsonify
from flask_cors import CORS
import domain

app = Flask(__name__)
CORS(app)

# container bootstrap
container = knot.Container({
    'db.fqn': 'sqlite:///banco_temporario.db',
    'db.echo': False
})

domain.apply_to_container(container)

# Plain case
contato_repository = container('models_contato_repository')


def result_list(model_object_response):
    response = []
    for r in model_object_response:
        response.append(r.__dict__)
    return response


@app.route('/contatos', methods=['GET', 'POST'])
def contatos():
    if request.method == 'GET':
        pass

    elif request.method == 'POST':
        pass


@app.route('/operadoras', methods=['GET'])
def operadoras():
    if request.method == 'GET':
        pass


# query = contato_repository.create_query()
# result = contato_repository.find_all(query)
# pass
# insert
# contato = contato_repository.new(nome='Yuri', telefone='8888-8888')
# contato_repository.insert(contato)
# print('User %s created with id %d' % (contato.nome, contato.id))
# delete
# for c in found:
#     contato_repository.delete(c)
# found = contato_repository.find(query).all()
# if len(found) == 0:
#     print('Deleted success!')

query = contato_repository.create_query()
v = contato_repository.find(query).all()
test = json.dumps(dict(row.items()) for row in v)
pass

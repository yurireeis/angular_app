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


@app.route('/contatos', methods=['GET', 'POST'])
def contatos():
    if request.method == 'GET':
        query = contato_repository.create_query().find()
        return contato_repository.find(query).all()

    elif request.method == 'POST':
        pass


@app.route('/operadoras', methods=['GET'])
def operadoras():
    if request.method == 'GET':
        pass


query = contato_repository.create_query().find()
result = [].append(str(contato)) for contato in contato_repository.find(query).all()

# insert
# contato = contato_repository.new(nome='Yuri', telefone='8888-8888')
# contato_repository.insert(contato)
# print('User %s created with id %d' % (contato.nome, contato.id))

# find
# query = contato_repository.create_query().find_all()
# found = contato_repository.find(query).all()
# print('User %s was created at %s' % (found.nome, found.data))

# delete
# for c in found:
#     contato_repository.delete(c)

# found = contato_repository.find(query).all()
# if len(found) == 0:
#     print('Deleted success!')

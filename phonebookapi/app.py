import knot
from flask import Flask, request
from flask_cors import CORS
import domain

app = Flask(__name__)
CORS(app)

container = knot.Container({
    'db.fqn': '',
    'db.echo': False,
})

domain.apply_to_container(container)


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

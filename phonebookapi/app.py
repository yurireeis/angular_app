from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/operadoras', methods=['GET'])
def hello_word():
    if request.method == 'GET':
        return jsonify('Hello cross-origin Word')

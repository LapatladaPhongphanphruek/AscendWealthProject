from flask import Flask
from flask_socketio import SocketIO

socketio = SocketIO()

def create_app(debug = True):
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'mysecret'

    from index.index import index_blueprint

    app.register_blueprint(index_blueprint)

    return app
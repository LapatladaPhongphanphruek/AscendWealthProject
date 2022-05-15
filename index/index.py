from flask import Flask, request, render_template, Blueprint, session, redirect, url_for

index_blueprint = Blueprint('index_blueprint', __name__,template_folder='templates', static_folder='static', static_url_path='/')

app = Flask(__name__)

@index_blueprint.route("/")
def index():
    return render_template("index.html")


import math
import flask
from flask import (Flask, render_template)
from dash import html

app = Flask(__name__)
app.debug = True
app.title = 'MAPA INTERACTIVO'


@app.route('/')
def mapainteractivo():
    return render_template( 'index.html')

@app.route('/nocturno')
def nocturno():
    return render_template( 'index2.html')

if __name__ == '__main__':
    app.run()
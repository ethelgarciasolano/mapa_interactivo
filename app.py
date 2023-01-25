

import math
import flask
from flask import (Flask, render_template,request)
from dash import html

app = Flask(__name__)
app.debug = True
app.title = 'MAPA INTERACTIVO'


@app.route('/', methods=('GET', 'POST'))
def mapainteractivo():
    try:
        select = request.form.get('tipomapa')
        if select=='Diurno':
            return render_template( 'index.html')
        elif select=='Nocturno':
            return render_template( 'index2.html')
        else: 
            return render_template( 'index.html')
    except Exception as ex:
        print(ex)
        return render_template( 'index.html')



if __name__ == '__main__':
    app.run()
    

''' 
   function onchangeDiurno(e) {
    if (e.currentTarget.value === 'Diurno') {
        <script src='https://devcenter.link/apropia/wp-content/resources/ConflictoDiurno.js'></script>;
    }
}

document.getElementById("tipomapaNocturno").addEventListener('change', onchangeDiurno);

function onchangeNocturno(e) {
    if (e.currentTarget.value === 'Nocturno') {
        <script src='https://devcenter.link/apropia/wp-content/resources/ConflictoNocturno.js'></script>
    }
}

document.getElementById("tipomapaDiurno").addEventListener('change', onchangeNocturno);
   '''
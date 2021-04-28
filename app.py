from flask import render_template, url_for, redirect
from data import data_bank, db, app
import pandas as pd


@app.route('/', methods=['GET'])
def main():
    dictionary = [u.__dict__ for u in db.session.query(data_bank).all()]
    for i in dictionary:
        del i['_sa_instance_state']
    df = pd.DataFrame(dictionary)
    dfJSON = df.to_json(orient='index')
    return render_template('index.html', dfJSON=dfJSON)


if __name__ == "__main__":
    app.secret_key = '123456'
    app.run(debug='Enable', use_reloader=True)
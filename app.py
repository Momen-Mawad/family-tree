from flask import render_template
from flask import Flask
import csv

with open('static/data.csv', encoding='UTF-8') as f:
    data = [{k: str(v) for k, v in row.items()}
        for row in csv.DictReader(f, skipinitialspace=True)]

for i in data:
    if i["tags"] == 'partner':
        i["tags"] = [i["tags"]]
    if i["tags"] == '':
        i.pop("tags")

for i in data:
    print(i)

app = Flask(__name__)


@app.route('/', methods=['GET'])
def main():

    return render_template('main.html', dfJSON=None, data=data)


if __name__ == "__main__":
    app.secret_key = '123456'
    app.run(debug='Enable', use_reloader=True)

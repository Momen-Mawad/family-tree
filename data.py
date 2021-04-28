from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///static/data.db'
db = SQLAlchemy(app)

class data_bank(db.Model):
    __tablename__ = 'data'
    __table_args__ = {'extend_existing': True}

    index = db.Column(db.Integer, primary_key=True)
    first = db.Column(db.String)
    second = db.Column(db.String)
    third = db.Column(db.String)
    last = db.Column(db.String)
    father = db.Column(db.Integer)
    mother = db.Column(db.Integer)
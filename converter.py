import pandas as pd
from sqlalchemy import create_engine


engine = create_engine('sqlite:///static/data.db')
data = pd.read_csv('static/data.csv')
data.to_sql('data', engine, if_exists='replace', index=False)
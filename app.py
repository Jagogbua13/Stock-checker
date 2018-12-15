from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
import stock

import quandl
import pandas as pd
import json
from sqlalchemy import create_engine,inspect
import pymysql
pymysql.install_as_MySQLdb()
# Import and establish Base for which classes will be constructed 
from sqlalchemy.ext.declarative import declarative_base
# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
Base = declarative_base()
engine = create_engine("sqlite:///stocks.sqlite")




app = Flask(__name__)



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")
    


@app.route("/<ticker>")
def tickers(ticker):
    stock_data = stock.stockgetter(ticker)

    return jsonify(stock_data)



if __name__ == "__main__":
    app.run()

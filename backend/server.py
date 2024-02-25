from flask import Flask
import datetime
from flask_cors import CORS
import pandas as pd
from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet as wn
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem import SnowballStemmer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from rake_nltk import Rake

x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
CORS(app)
 
# Route for seeing a data
@app.route('/pages')
def get_class():
    
    # Returning an api for showing in  reactjs
    return {
        "month":x, 
        } 


# Running app
if __name__ == '__main__':
    app.run(debug=True, port =8080)
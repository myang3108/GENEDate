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
    
    df = pd.read_csv("FinalDF.csv")

    # Target keywords
    target_keywords = ["asian"]

        # Initialize Rake for keyword extraction
    r = Rake()

    df["Similarity Score"] = ""

    # Function to find synonyms of a word using WordNet
    def find_synonyms(word):
        synonyms = set()
        for synset in wn.synsets(word):
            for lemma in synset.lemmas():
                synonyms.add(lemma.name().lower())
        return synonyms

    # Preprocess the keywords and text
    #stop_words = set(stopwords.words('english'))
    stemmer = SnowballStemmer('english')

# Preprocessed target keywords
    preprocessed_target_keywords = [stemmer.stem(word.lower())[:5] for word in target_keywords]

    for i in range(df.shape[0]):
        text = df.at[i, 'Description']

        # Extract keywords from the text using RAKE
        r.extract_keywords_from_text(text)
        rake_keywords = r.get_ranked_phrases()    

        # Preprocessed RAKE keywords
        preprocessed_rake_keywords = []
        for keyword in rake_keywords:
            preprocessed_rake_keywords.extend([stemmer.stem(word.lower())[:5] for word in word_tokenize(keyword) ])

    # Expand keyword list with synonyms
        expanded_keywords = set(preprocessed_rake_keywords)
        for keyword in preprocessed_rake_keywords:
            synonyms = find_synonyms(keyword)
            synonyms = [stemmer.stem(synonym)[:5] for synonym in synonyms]
            expanded_keywords.update(synonyms)

    #Preprocess the text
        preprocessed_text = [stemmer.stem(word.lower())[:5] for word in word_tokenize(text) ]

    # Create vectors for the text and target keywords
        text_vector = np.array([word in preprocessed_text for word in expanded_keywords], dtype=int)
        target_vector = np.array([word in preprocessed_target_keywords for word in expanded_keywords], dtype=int)

    # Reshape vectors for compatibility
        text_vector = text_vector.reshape(1, -1)
        target_vector = target_vector.reshape(1, -1)

    # Calculate the cosine similarity between the text vector and the target keywords vector
        similarity = cosine_similarity(text_vector, target_vector)[0][0]

    # print("Cosine Similarity Score for the entire text:", similarity)
        df.at[i, 'Similarity Score'] = similarity


    df = df.loc[~(df['Similarity Score'] == 0)]
    df =df.sort_values('Similarity Score', ascending=False)
    df = df.drop_duplicates('Name')
    df = df.head(1)

    df = df.drop(['Similarity Score', 'Unnamed: 0', 'Year', 'Term', 'Subject', 'Number', 'Start Time', 'End Time', 'Days of Week'], axis=1)

    json = {'name': df["Name"].iloc[0], 'description': df["Description"].iloc[0], 'Credit_Hours': df["Credit Hours"].iloc[0], 'Degree_Attributes': df["Degree Attributes"].iloc[0], 'Type': df["Type"].iloc[0], 'Instructors': df["Instructors"].iloc[0], 'Class': df["Class"].iloc[0], 'ProfRating': df["ProfRating"].iloc[0], 'averageGPA': df["GPA"].iloc[0], 'link': df["Reddit_Links"].iloc[0]}
    # Returning an api for showing in  reactjs
    return json


# Running app
if __name__ == '__main__':
    app.run(debug=True, port =8080)
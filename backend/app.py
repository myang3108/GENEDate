from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_session import Session  # Corrected import
import os

app = Flask(__name__)
CORS(app)

# Session configuration
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = 'super secret key'
Session(app)  # Initialize the session for the app


# Database configuration
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Database model
class DataEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<DataEntry {self.data}>'

db.create_all()

# Routes
@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json.get('data')
    if data:
        new_entry = DataEntry(data=data)
        db.session.add(new_entry)
        db.session.commit()
        return jsonify({'message': 'Data stored successfully!', 'data': data})
    else:
        return jsonify({'message': 'No data provided'}), 400

@app.route('/get-data', methods=['GET'])
def get_data():
    entries = DataEntry.query.all()
    data_list = [{'id': entry.id, 'data': entry.data} for entry in entries]
    return jsonify(data_list)

@app.route('/set-session', methods=['GET'])
def set_session_data():
    session['key'] = 'value'  # Example session data
    return 'Session data set'

@app.route('/get-session', methods=['GET'])
def get_session_data():
    value = session.get('key', 'Not set')
    return f'Session data: {value}'

if __name__ == '__main__':
    app.run(debug=True)
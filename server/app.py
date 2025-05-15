from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/example', methods=['POST'])
def example_http_endpoint():
    return jsonify(message='Message retrieved from backend'), 200

if __name__ == '__main__':
    app.run(debug=True)

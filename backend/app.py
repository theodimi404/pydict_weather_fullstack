from flask import Flask
from controllers import controller_home
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(controller_home.api)


if __name__ == '__main__':
    app.run(debug=True)

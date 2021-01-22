from flask import Blueprint, request, jsonify
from services import services_home

api = Blueprint(
    name="controller_home",
    import_name="controller_home",
    url_prefix="/home"
)


@api.route('/', methods=['GET', 'POST'])
def home():
    # Gets the data from the input form
    form_data = request.get_json(force=True)
    # Passes the city's name to return the prediction
    prediction = services_home.main(form_data['City'])
    # Checking if the user typed a city's name wrong. It returns False to trigger an alarm message in React
    if prediction:
        return jsonify(prediction)
    else:
        return jsonify(False)

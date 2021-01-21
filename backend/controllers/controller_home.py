from flask import Blueprint, request, jsonify
from services import services_home

api = Blueprint(
    name="controller_home",
    import_name="controller_home",
    url_prefix="/home"
)


@api.route('/', methods=['GET', 'POST'])
def home():
    form_data = request.get_json(force=True)
    prediction = services_home.main(form_data['City'])
    return jsonify(prediction)

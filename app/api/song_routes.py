from flask import Blueprint, request, jsonify
from app.models import db, Song
from flask_login import current_user, login_required
from s3_helpers import (
    upload_file_to_s3, get_unique_filename, allowed_file)

song_routes = Blueprint("songs", __name__)


@song_routes.route("/<int:id>")
def get_one_song(id):
    song = Song.query.get(id)
    return song.to_dict()

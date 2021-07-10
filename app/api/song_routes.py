from flask import Blueprint, request, jsonify
from app.models import db, Song
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, get_unique_filename, allowed_file)

song_routes = Blueprint("songs", __name__)


@song_routes.route("/<int:id>")
def get_one_song(id):
    song = Song.query.get(id)
    return song.to_dict()


@song_routes.route('/new', methods=["POST"])
@login_required
def create_song():
    print("****We got to song_artist() on the /api/songs/new route")
    if "song" not in request.files:
        return {"errors": "audio file required"}, 400

    song = request.files["song"]

    if not allowed_file(song.filename):
        return {"errors": "file type not permitted"}, 400

    song.filename = get_unique_filename(song.filename)

    upload = upload_file_to_s3(song)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    new_song = Song(
        title=request.form["title"],
        song_art=None,
        song_url=url,
        user_id=current_user.id,
        pinned=false,
    )
    db.session.add(new_song)
    db.session.commit()
    print("*******new_song is ", new_song)
    return new_song.to_dict()

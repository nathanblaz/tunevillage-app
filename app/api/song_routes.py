from flask import Blueprint, request, jsonify
from app.models import db, Song
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, get_unique_filename, allowed_file)

song_routes = Blueprint("songs", __name__)


@song_routes.route("/<int:id>")
@login_required
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
        artist_id=request.form["artist_id"],
        pinned=False,
    )
    db.session.add(new_song)
    db.session.commit()
    print("*******new_song is ", new_song)
    return new_song.to_dict()


# @artist_routes.route('/<int:id>/song-art', methods=["PUT"])
# @login_required
# def update_song(id):
#     if "song_art" not in request.files:
#         return {"errors": "image required"}, 400

#     song_art = request.files["song_art"]

#     if not allowed_file(avatar.filename):
#         return {"errors": "file type not permitted"}, 400

#     song_art.filename = get_unique_filename(song_art.filename)

#     upload = upload_file_to_s3(song_art)

#     if "url" not in upload:
#         return upload, 400

#     url = upload["url"]

#     # update database

#     song = Song.query.get(id)
#     song.song_art = url
#     db.session.add(song)
#     db.session.commit()
#     return song.to_dict()

from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from app.models import db, Artist, Song
from app.s3_helpers import (
    get_unique_filename, allowed_file, upload_file_to_s3)

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/')
@login_required
def artists():
    artists = Artist.query.all()
    return {'artists': [artist.to_dict() for artist in artists]}


@artist_routes.route('/<int:id>')
@login_required
def artist(id):
    artist = Artist.query.get(id)
    return artist.to_dict()


@artist_routes.route('/<int:id>/songs')
@login_required
def artist_songs(id):
    songs = Song.query.filter(Song.artist_id == id).all()
    return {'songs': [song.to_dict() for song in songs]}


@artist_routes.route('/new', methods=["POST"])
@login_required
def create_artist():
    print("****We got to create_artist() on the /api/artists/new route")
    if "avatar" not in request.files:
        return {"errors": "image required"}, 400

    avatar = request.files["avatar"]

    if not allowed_file(avatar.filename):
        return {"errors": "file type not permitted"}, 400

    avatar.filename = get_unique_filename(avatar.filename)

    upload = upload_file_to_s3(avatar)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    new_artist = Artist(
        artistname=request.form["artistname"],
        bio=request.form["bio"],
        avatar=url,
        user_id=current_user.id,
    )
    db.session.add(new_artist)
    db.session.commit()
    print("*******new_artist is ", new_artist)
    return new_artist.to_dict()


@artist_routes.route('/<int:id>/avatar', methods=["PUT"])
@login_required
def upload_avatar(id):
    if "avatar" not in request.files:
        return {"errors": "image required"}, 400

    avatar = request.files["avatar"]

    if not allowed_file(avatar.filename):
        return {"errors": "file type not permitted"}, 400

    avatar.filename = get_unique_filename(avatar.filename)

    upload = upload_file_to_s3(avatar)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    # update database

    artist = Artist.query.get(id)
    artist.avatar = url
    db.session.add(artist)
    db.session.commit()
    return artist.to_dict()


@artist_routes.route("/<int:id>/bio", methods=["PUT"])
@login_required
def update_bio(id):
    artist = Artist.query.get(id)
    artist.bio = request.form["bio"]
    db.session.add(artist)
    db.session.commit()
    return artist.to_dict()


@artist_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_artist(id):
    artist = Artist.query.get(id)
    # url = artist.avatar
    # filename = url.removeprefix('http://tunevillage-app.s3.amazonaws.com/')
    # delete_file_from_s3(filename)
    if not artist:
        return jsonify("artist not found")
    db.session.delete(artist)
    db.session.commit()
    return {'id': id}

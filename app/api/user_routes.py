from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Song

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('<int:id>/songs')
# @login_required
def user_songs(id):
    songs = Song.query.filter(Song.user_id == id).all()
    return {'songs': [song.to_dict() for song in songs]}


@user_routes.route('<int:id>/avatar', methods["PUT"])
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

    user = Usery.query.get(id)
    user.avatar = request.form["avatar"]
    db.session.add(user)
    db.session.commit()
    return user.to_dict()

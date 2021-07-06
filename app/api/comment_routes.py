from flask import Blueprint, request, jsonify
from app.models import db, Comment
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, get_unique_filename, allowed_file)

comment_routes = Blueprint("comments", __name__)

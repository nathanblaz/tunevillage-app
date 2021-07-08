from .db import db
from sqlalchemy import func


class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    artistname = db.Column(db.String(40), nullable=False, unique=True)
    avatar = db.Column(db.String(500))
    bio = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    users = db.relationship('User', back_populates='artists')
    songs = db.relationship('Song', back_populates='artists')

    def to_dict(self):
        return {
            'id': self.id,
            'artistname': self.artistname,
            'avatar': self.avatar,
            'bio': self.bio,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
            'songs': [song.to_dict() for song in self.songs]
        }

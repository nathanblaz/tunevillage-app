from .db import db
from sqlalchemy import func


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    song_url = db.Column(db.String(500))
    song_art = db.Column(db.String(500))
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    pinned = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    artists = db.relationship('Artist', back_populates='songs')
    comments = db.relationship('Comment', back_populates='songs')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'song_url': self.song_url,
            'song_art': self.song_art,
            'pinned': self.pinned,
            'artist_id': self.artist_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

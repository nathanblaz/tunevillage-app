from app.models import db, Song


def seed_songs():
    song1 = Song(
        title='Monolith',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+01+A1.+Monolith.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=1,
        pinned=False
    )
    song2 = Song(
        title='Plurality',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+02+A2.+Plurality.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=1,
        pinned=False
    )
    song3 = Song(
        title='Parallels',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+03+B1.+Parallels.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=1,
        pinned=True
    )
    song4 = Song(
        title='Arrival',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+04+B2.+Arrival.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=1,
        pinned=False
    )
    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    db.session.add(song4)
    db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()

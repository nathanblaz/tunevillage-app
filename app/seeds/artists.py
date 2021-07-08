from app.models import db, Artist


def seed_artists():
    fugal = Artist(
        artistname='Fugal',
        avatar='https://imgproxy.ra.co/_/quality:100/h:180/w:180/rt:fill/gravity:sm/plain//images/profiles/fugal.jpg',
        bio='Berlin-based Korean-American techno artist from Seattle. His style moves in a space of dynamic tension between dense, insistent rhythmics and nuanced emotion. A resident DJ and producer of the singular collective, secondnature.',
        user_id=1
    )
    db.session.add(fugal)
    db.session.commit()


def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        comment='Wow, amazing track!',
        song_id=1,
        user_id=1
    )
    comment2 = Comment(
        comment='Outstanding',
        song_id=2,
        user_id=1
    )
    comment3 = Comment(
        comment='This one is my absolute favorite!',
        song_id=3,
        user_id=1
    )
    comment4 = Comment(
        comment='Good stuff',
        song_id=4,
        user_id=1
    )
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    fugal = User(
        username='Fugal',
        email='fugal@secondnatureseattle.com',
        bio='Berlin-based Korean-American techno artist from Seattle. His style moves in a space of dynamic tension between dense, insistent rhythmics and nuanced emotion. A resident DJ and producer of the singular collective, secondnature.',
        password='password',
        avatar='https://imgproxy.ra.co/_/quality:100/h:180/w:180/rt:fill/gravity:sm/plain//images/profiles/fugal.jpg')
    db.session.add(demo)
    db.session.add(fugal)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

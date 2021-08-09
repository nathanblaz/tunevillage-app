from app.models import db, Song


def seed_songs():
    caveclove1 = Song(
        title='Edge of Emergency',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+Dollars+to+Tokens+-+01+Edge+of+Emergency.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+cover.jpg',
        artist_id=1,
        pinned=False
    )
    caveclove2 = Song(
        title="I'm Still Trying",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+Dollars+to+Tokens+-+02+I'm+Still+Trying.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+cover.jpg",
        artist_id=1,
        pinned=False
    )
    caveclove3 = Song(
        title="Sage Advice",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+Dollars+to+Tokens+-+03+Sage+Advice.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+cover.jpg",
        artist_id=1,
        pinned=False
    )
    caveclove4 = Song(
        title="Rocked",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+Dollars+to+Tokens+-+04+Rocked.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+cover.jpg",
        artist_id=1,
        pinned=False
    )
    caveclove5 = Song(
        title="Velvet Coat",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+Dollars+to+Tokens+-+05+Velvet+Coat.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/Cave+Clove+-+cover.jpg",
        artist_id=1,
        pinned=False
    )
    drabmajesty1 = Song(
        title="A Dialogue",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+01+A+Dialogue.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty2 = Song(
        title="The Other Side",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+02+The+Other+Side.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty3 = Song(
        title="Ellipsis",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+03+Ellipsis.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty4 = Song(
        title="Noise of the Void",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+04+Noise+of+the+Void.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty5 = Song(
        title="Dolls in the Dark",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+05+Dolls+in+the+Dark.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty6 = Song(
        title="Oxytocin",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+06+Oxytocin.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty7 = Song(
        title="Long Division",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+07+Long+Division.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    drabmajesty8 = Song(
        title="Long Division",
        song_url="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+07+Long+Division.mp3",
        song_art="https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+cover.jpg",
        artist_id=2,
        pinned=False
    )
    fugal1 = Song(
        title='Out of Sequence',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/DRAB+MAJESTY+-+Modern+Mirror+-+08+Out+of+Sequence.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=8,
        pinned=False
    )
    fugal2 = Song(
        title='Plurality',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+02+A2.+Plurality.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=8,
        pinned=False
    )
    fugal3 = Song(
        title='Parallels',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+03+B1.+Parallels.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=8,
        pinned=True
    )
    fugal4 = Song(
        title='Arrival',
        song_url='https://tunevillage-app.s3.us-west-1.amazonaws.com/Fugal+-+Parallels+-+04+B2.+Arrival.mp3',
        song_art='https://tunevillage-app.s3.us-west-1.amazonaws.com/cover.png',
        artist_id=8,
        pinned=False
    )
    db.session.add(caveclove1)
    db.session.add(caveclove2)
    db.session.add(caveclove3)
    db.session.add(caveclove4)
    db.session.add(caveclove5)
    db.session.add(fugal1)
    db.session.add(fugal2)
    db.session.add(fugal3)
    db.session.add(fugal4)
    db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()

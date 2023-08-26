import os
import json

cur_path = os.path.dirname(__file__)
db_path = os.path.join(cur_path, '../database/data_sample.json')


def match_song(song_id, songs):
    return songs.get('song_id') == song_id


async def get_song(song_id: str):
    with open(db_path) as db_file:
        file = db_file.read()
        data = json.loads(file)  # should be using a real db for efficiency reasons, but this is fine for now
        songs = data[1].get('values')
        for song in songs:
            if str(song.get('song_id')) == str(song_id):
                return song
    return None


async def get_all_songs():
    with open(db_path) as db_file:
        file = db_file.read()
        data = json.loads(file)  # should be using a real db for efficiency reasons, but this is fine for now
        songs = data[1].get('values')
    print(songs)
    return songs

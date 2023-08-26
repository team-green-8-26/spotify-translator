import api.dbaccess as db


async def get_song(id: str):
    return await db.get_song(id)


async def get_all_songs():
    return await db.get_all_songs()


async def get_translation(id: str):
    return None


async def report_bad_translation():
    return None

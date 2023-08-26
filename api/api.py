import os
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from api.types import Song, Translation
from api.appmanager import get_song, get_all_songs, get_translation
import socket
import uvicorn
from typing import Dict, List

app = FastAPI()
port = 6222

origins: List[str] = [
    "http://192.168.1.216",
    "http://192.168.1.216:6222",
    "http://localhost",
    "http://localhost:6222",
    "10.4.0.80:59228",
]

# https://fastapi.tiangolo.com/tutorial/cors/
app.add_middleware(CORSMiddleware,
                   allow_origins=origins)


"""
FastAPI on a uvicorn server:
 - Go to https://fastapi.tiangolo.com/tutorial/ to learn FastAPI
 - Or follow this 30-min tutorial https://www.youtube.com/watch?v=SORiTsvnU28
 - Can see api info by going to '/docs' endpoint
"""


@app.get("/")
async def index() -> FileResponse:
    """
    Summary of the API -- features useful methods for debugging
    """
    webdir = os.path.dirname(__file__)
    index = os.path.join(webdir, '../web/index.html')
    return FileResponse(index)


@app.get("/song")
async def index():  # -> Dict[str, Dict[str, Songs]]:
    """
    Return all hardcoded songs in the database
    """
    print(f"getting all songs")
    songs = await get_all_songs()
    return {
        "songs": songs
    }


@app.get("/song/{id}")
async def index(id: str) -> Dict[str, Song]:
    """
    Return song of specific id
    """
    print(f"getting song with id {id}")
    song = await get_song(id)
    return {
        "song": song
    }


@app.get("/translate/{id}")
async def index(id: str) -> Dict[str, Translation]:
    """
    Return English translation for song of specified ID
    """
    print(f"getting translation for song with id {id}")
    translation = await get_translation(id)
    return {
        "translation": translation
    }


@app.post("/report/{id}")
async def index(artist: str, songname: str) -> Dict[str, str]:
    """
    Report a bad translation
    """
    print("Submitted report of a bad translation")
    return {
        "song": f"{songname} by {artist}",
        "correction": "XXX was a bad translation. Replace with YYY?",
        "description": "Submitted report of a bad translation"
    }


def start_api():
    uvicorn.run(app, host=socket.gethostbyname(socket.gethostname()), port=port)

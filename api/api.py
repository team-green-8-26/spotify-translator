import os
from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
import socket
import uvicorn
from typing import Dict

app = FastAPI()
port = 6222


class MediaInfo(BaseModel):
    id: str
    artist: str
    songname: str


songs: Dict[str, MediaInfo] = {
    
}

"""
FastAPI on a uvicorn server:
 - Go to https://fastapi.tiangolo.com/tutorial/ to learn FastAPI
 - Or follow this 30-min tutorial https://www.youtube.com/watch?v=SORiTsvnU28
 - Can see api info by going to '/docs' endpoint
"""


@app.get("/")
def index() -> FileResponse:
    """
    Summary of the API
    """
    webdir = os.path.dirname(__file__)
    index = os.path.join(webdir, '../web/index.html')
    return FileResponse(index)


@app.get("/song")
def index() -> Dict[str, Dict[str, MediaInfo]]:
    """
    Return all hardcoded songs in the database
    """
    return {
        "songs": songs
    }


@app.get("/song/{id}")
def index(id: str) -> Dict[str, MediaInfo]:
    """
    Return song of specific id
    """
    return {
        "song": songs.get(id)
    }


@app.post("/report/{id}")
def index(artist: str, songname: str) -> Dict[str, str]:
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

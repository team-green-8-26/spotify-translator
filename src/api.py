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
    id: int


"""
FastAPI on a uvicorn server:
 - Go to https://fastapi.tiangolo.com/tutorial/ 
 - Or follow this tutorial https://www.youtube.com/watch?v=SORiTsvnU28
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
def index() -> FileResponse:
    """
    Return all hardcoded songs in the database
    """
    webdir = os.path.dirname(__file__)
    index = os.path.join(webdir, '../web/index.html')
    return FileResponse(index)


@app.get("/song/{id}")
def index() -> FileResponse:
    """
    Return song of specific id
    """
    webdir = os.path.dirname(__file__)
    index = os.path.join(webdir, '../web/index.html')
    return FileResponse(index)


@app.post("/report/{id}")
def index(artist: str, songname: str) -> Dict[str, str]:
    """
    Report a bad translation
    """
    return {
        "items": f"{songname} by {artist}",
        "description": "In the future this will send an actual song"
    }


def start_api():
    uvicorn.run(app, host=socket.gethostbyname(socket.gethostname()), port=port)

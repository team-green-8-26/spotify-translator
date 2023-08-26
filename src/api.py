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
    artist: str
    songname: str
    filename: str
    media_type: str


"""
Useful fastapi info: 
 - Can see api info by going to '/docs' endpoint
 - 
"""


@app.get("/")
def index() -> FileResponse:
    webdir = os.path.dirname(__file__)
    index = os.path.join(webdir, '../web/index.html')
    return FileResponse(index)


@app.get("/song")
def index(artist: str, songname: str) -> Dict[str, str]:
    return {
        "items": f"{songname} by {artist}",
        "description": "In the future this will send an actual song"
    }


def start_api():
    uvicorn.run(app, host=socket.gethostbyname(socket.gethostname()), port=port)

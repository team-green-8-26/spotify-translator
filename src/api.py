import os
from fastapi import FastAPI
from fastapi.responses import FileResponse
import socket
import uvicorn

app = FastAPI()
port = 6222


@app.get("/")
def index() -> FileResponse:
    webdir = os.path.dirname(__file__)
    index = os.path.join(webdir, '../web/index.html')
    return FileResponse(index)


def start_api():
    uvicorn.run(app, host=socket.gethostbyname(socket.gethostname()), port=port)

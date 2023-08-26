from pydantic import BaseModel
from typing import List


class Song(BaseModel):
    song_id: str
    title: str
    artist: str
    language_id: str
    lyrics: str


class Songs(BaseModel):
    songs: List[Song]


class Language(BaseModel):
    language_id: str
    name: str
    code: str


class Translation(BaseModel):
    translation_id: str
    sentence_id: str
    language_id: str
    translated_text: str
    flagged: str


class User(BaseModel):
    user_id: str
    username: str
    email: str
    password_hash: str
    created_at: str


class Suggestion(BaseModel):
    suggestion_id: str
    sentence_id: str
    suggested_translation: str
    user_id: str
    submitted_at: str


class Sentence(BaseModel):
    sentence_id: str
    song_id: str
    text: str
    timestamp: str


from pydantic import BaseModel


class Songs(BaseModel):
    song_id: str
    title: str
    artist: str
    language_id: str
    lyrics: str


class Languages(BaseModel):
    language_id: str
    name: str
    code: str


class Translations(BaseModel):
    translation_id: str
    sentence_id: str
    language_id: str
    translated_text: str
    flagged: str


class Users(BaseModel):
    user_id: str
    username: str
    email: str
    password_hash: str
    created_at: str


class Suggestions(BaseModel):
    suggestion_id: str
    sentence_id: str
    suggested_translation: str
    user_id: str
    submitted_at: str


class Sentences(BaseModel):
    sentence_id: str
    song_id: str
    text: str
    timestamp: str


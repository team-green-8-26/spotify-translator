-- Drop tables if they exist
DROP TABLE IF EXISTS suggestions;
DROP TABLE IF EXISTS translations;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sentences;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS languages;


-- Create Languages table
CREATE TABLE languages (
    language_id PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(2) NOT NULL
);

-- Create Users table
CREATE TABLE users (
    user_id PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Create Songs table
CREATE TABLE songs (
    song_id INTEGER PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    artist VARCHAR(100),
    language_id INTEGER REFERENCES languages(language_id),
    lyrics TEXT NOT NULL
);

-- Create Sentences table
CREATE TABLE sentences (
    sentence_id INTEGER PRIMARY KEY,
    song_id INTEGER REFERENCES songs(song_id),
    text TEXT NOT NULL
);

-- Create Translations table
CREATE TABLE translations (
    translation_id INTEGER PRIMARY KEY,
    sentence_id INTEGER REFERENCES sentences(sentence_id),
    language_id INTEGER REFERENCES languages(language_id),
    translated_text TEXT NOT NULL,
    flagged BOOLEAN DEFAULT FALSE
);

-- Create Suggestions table
CREATE TABLE suggestions (
    suggestion_id INTEGER PRIMARY KEY,
    sentence_id INTEGER REFERENCES sentences(sentence_id),
    suggested_translation TEXT NOT NULL,
    user_id INTEGER REFERENCES users(user_id),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


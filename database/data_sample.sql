-- Populate Languages table with example data
INSERT INTO languages (name, code) VALUES ('English', 'en'), ('Hindi', 'hi');

-- Populate Songs table with example data
INSERT INTO songs (title, artist, language_id, lyrics)
VALUES
    ('Song 1', 'Artist 1', 1, 'This is the lyrics of song 1.'),
    ('Song 2', 'Artist 2', 2, 'These are the lyrics of song 2.'),
    ('Song 3', 'Artist 3', 1, 'Lyrics for song 3 go here.'),
    ('Song 4', 'Artist 4', 2, 'The lyrics of song 4 are here.'),
    ('Song 5', 'Artist 5', 1, 'Song 5 lyrics are written here.'),
    ('Song 6', 'Artist 6', 2, 'The lyrics for song 6.'),
    ('Song 7', 'Artist 7', 1, 'Lyrics of song 7 are present.'),
    ('Song 8', 'Artist 8', 2, 'These lyrics belong to song 8.'),
    ('Song 9', 'Artist 9', 1, 'Song 9 lyrics go here.'),
    ('Song 10', 'Artist 10', 2, 'The lyrics of song 10 are here.');

-- Populate Languages table with example data
INSERT INTO languages (language_id, name, code) VALUES (1, 'English', 'en'), (2, 'Hindi', 'hi'), (3, 'German', 'de');

-- Populate users table with example data
INSERT INTO users (user_id, username, email) VALUES (1, 'UserOne', 'userone@example.com');

-- Populate Songs table with example data
INSERT INTO songs (song_id, title, artist, language_id, lyrics)
VALUES
    (1, 'Die Eier Von Satan', 'Tool', 3, 'Die Eier von Satan
Eine halbe Tasse Staubzucker
Ein Viertel Teelöffel Salz
Eine Messerspitze türkisches Haschisch
Ein halbes Pfund Butter
Ein Teelöffel Vanillezucker
Ein halbes Pfund Mehl
150 Gramm gemahlene Nüsse
Ein wenig extra Staubzucker
Und keine Eier
In eine Schüssel geben
Butter einrühren, gemahlene Nüsse zugeben und den Teig verkneten
Augenballgroße Stücke vom Teig formen
Im Staubzucker wälzen und sagt die Zauberwörter
Simsalabimbamba Saladu Saladim
Auf ein gefettetes Backblech legen und bei 200 Grad für 15 Minuten backen
Und keine Eier
Das Leben
Bei 200 Grad 15 Minuten backen
Und keine Eier'),
    ('Song 2', 'Artist 2', 2, 'These are the lyrics of song 2.'),
    ('Song 3', 'Artist 3', 1, 'Lyrics for song 3 go here.'),
    ('Song 4', 'Artist 4', 2, 'The lyrics of song 4 are here.'),
    ('Song 5', 'Artist 5', 1, 'Song 5 lyrics are written here.'),
    ('Song 6', 'Artist 6', 2, 'The lyrics for song 6.'),
    ('Song 7', 'Artist 7', 1, 'Lyrics of song 7 are present.'),
    ('Song 8', 'Artist 8', 2, 'These lyrics belong to song 8.'),
    ('Song 9', 'Artist 9', 1, 'Song 9 lyrics go here.'),
    ('Song 10', 'Artist 10', 2, 'The lyrics of song 10 are here.');

-- Populate Sentences table with example data
INSERT INTO sentences (sentence_id, song_id, text)
VALUES
    (1, 1, 'Die Eier von Satan'),
    (2, 1, 'Eine halbe Tasse Staubzucker
Ein Viertel Teelöffel Salz
Eine Messerspitze türkisches Haschisch
Ein halbes Pfund Butter
Ein Teelöffel Vanillezucker
Ein halbes Pfund Mehl
150 Gramm gemahlene Nüsse
Ein wenig extra Staubzucker
Und keine Eier'),
    (3, 1, 'In eine Schüssel geben
Butter einrühren, gemahlene Nüsse zugeben und den Teig verkneten
Augenballgroße Stücke vom Teig formen
Im Staubzucker wälzen und sagt die Zauberwörter
Simsalabimbamba Saladu Saladim'),
    (4, 1, 'Auf ein gefettetes Backblech legen und bei 200 Grad für 15 Minuten backen
Und keine Eier'),
    (5, 1, 'Bei 200 Grad 15 Minuten backen
Und keine Eier');

-- Populate Translations table with example data
INSERT INTO translations (translation_id, sentence_id, language_id, translated_text, flagged)
VALUES
    (1, 1, 1, 'The eggs of Satan', FALSE),
    (1, 2, 1, 'Half a cup of powdered sugar
A quarter teaspoon of salt
A pinch of Turkish hashish
Half a pound of butter
A teaspoon of vanilla sugar
Half a pound of flour
150 grams of ground nuts
A little extra powdered sugar
And no eggs', FALSE),
    (1, 3, 1, 'Put in a bowl
Stir in butter, add ground nuts and knead the dough
Shape the dough into eyeball-sized pieces
Roll in icing sugar and say the magic words
Abracadabra', FALSE),
    (1, 4, 1, 'Place on a greased baking sheet and bake at 200 degrees for 15 minutes
And no eggs', FALSE),
    (1, 5, 1, 'Bake at 200 degrees for 15 minutes
And no eggs', FALSE)
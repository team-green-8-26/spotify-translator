
import os
import io
import json
import os.path
path = os.path.join("nainowale-ne.txt")

lyrics = {}
stanza = 0

with io.open(path, "r",encoding = "utf-8") as f:
    #headers = f.readline().split('\n') # get the headers in a list
    #print(headers)                            # see what the headers are
    for line in f:
        if line.isspace():
            stanza = stanza+1
            lyrics[stanza] = []
        else:
            lyrics[stanza].append(line.strip())
            
for item in lyrics.values():
    print(item)
        

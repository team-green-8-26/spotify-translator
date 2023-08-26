
import os
import io
from decouple import config
import google.generativeai as palm
palm.configure(api_key=config("PALM_API_KEY"))



def open_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as infile:
        return infile.read()


def translate_with_palm(lyrics = "Se me hace agua la boca") -> None:

    #lyrics = "Se me hace agua la boca"
    prompt = open_file("./prompt.txt").replace('<<LYRICS>>', lyrics).replace('<<TARGET LANGUAGE>>', 'ENGLISH')
    print(prompt)
    response = palm.generate_text(prompt=prompt)
    print(f"Response from Model: {response.result}")


    return response




if __name__ == "__main__":
    translate_with_palm()
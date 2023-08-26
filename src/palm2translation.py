
import os
from decouple import config
import google.generativeai as palm
palm.configure(api_key=config("PALM_API_KEY"))




def science_tutoring(temperature: float = 0.2) -> None:


    response = palm.generate_text(prompt="What color is the sky?")
    print(f"Response from Model: {response.result}")


    return response


if __name__ == "__main__":
    print("??")
    science_tutoring()
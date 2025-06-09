import os
import random
import requests
from dotenv import load_dotenv
import json

load_dotenv()
API_KEY = os.getenv("TMDB_API_KEY")

page = random.randint(1, 10)

url = f"https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=tr-TR&page={page}"

response = requests.get(url)
data = response.json()

if response.status_code == 200 and "results" in data:
    film = random.choice(data["results"])
    
    title = film["title"]
    overview = film["overview"]
    vote = film["vote_average"]
    poster = f"https://image.tmdb.org/t/p/w500{film['poster_path']}" if film.get("poster_path") else "Poster yok"

    print("\n🎬 Bugünün Film Önerisi 🎬")
    print(f"İsim: {title}")
    print(f"IMDB Puanı: {vote}")
    print(f"Özet: {overview}")
    print(f"Poster: {poster}")

    movie_info = {
        "title":title,
        "overview": overview,
        "vote": vote,
        "poster": poster
    }
    with open("movie.json","w",encoding="utf-8") as f:
        json.dump(movie_info,f, ensure_ascii=False, indent=4)
else:
    print("Film önerisi alınamadı. API anahtarını ve bağlantını kontrol et.")



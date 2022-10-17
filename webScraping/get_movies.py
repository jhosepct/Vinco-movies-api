import requests
from bs4 import BeautifulSoup

base_url = 'https://www.imdb.com'


def get_movies():
    url = base_url + '/chart/top'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('tbody', {'class': 'lister-list'})
    movies = table.find_all('tr')
    movie_list = []

    for movie in movies:
        column = movie.find_all('td')

        movie_list.append({
            'link photo': column[0].a.img['src'],
            'title': column[1].a.text,
            'year': column[1].span.text.strip("()"),
            'rating': column[2].strong.text
        })

    return movie_list

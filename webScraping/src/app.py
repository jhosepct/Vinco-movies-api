from get_movies import get_movies
from db import DataBase

# Iniciamos la conexión
dataBase = DataBase()
# Creamos la tabla
dataBase.create_table()

# Obtenemos los datos
movies = get_movies()

# Insertamos los datos
for movie in movies:
    dataBase.insert_data(movie['title'], movie['year'],
                         movie['rating'], movie['link photo'])

# Cerramos la conexión
dataBase.close_connection()

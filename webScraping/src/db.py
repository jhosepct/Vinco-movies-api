import psycopg2
import pprint
from decouple import config


class DataBase:
    # Iniciamos la conexión
    def __init__(self):
        try:
            self.connection = psycopg2.connect(
                "dbname={} user='{}' host='{}' password='{}' port='{}'".format(config('DB_DATABASE'), config('DB_USER'), config('DB_HOST'), config('DB_PASSWORD'), config('DB_PORT')))
            self.connection.autocommit = True
            self.cursor = self.connection.cursor()
        except:
            pprint("No se pudo conectar a la base de datos")

    # Creamos la tabla
    def create_table(self):
        self.cursor.execute(
            "CREATE TABLE IF NOT EXISTS movies (id serial PRIMARY KEY, title varchar(255), year integer, rating decimal, link_photo varchar(255))")

    # Agregar datos
    def insert_data(self, title, year, rating, link_photo):
        self.cursor.execute(
            "INSERT INTO movies (title, year, rating, link_photo) VALUES (%s, %s, %s, %s)", (title, year, rating, link_photo))

    # Obtener los datos
    def get_data(self):
        self.cursor.execute("SELECT * FROM movies")
        return self.cursor.fetchall()

    # Cerrar la conexión
    def close_connection(self):
        self.connection.close()

-- create table users
CREATE EXTENSION citext;
CREATE TABLE IF NOT EXISTS users (
  	id serial PRIMARY KEY,
	email citext UNIQUE,
	password TEXT NOT NULL,
	name VARCHAR(50),
	last_name VARCHAR(50),
	phone VARCHAR(20)
)
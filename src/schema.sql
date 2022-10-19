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
-- create user
CREATE EXTENSION pgcrypto;
INSERT INTO users (email, "password", "name", last_name, phone) VALUES (
  'k3v1nct@mail.com',
  crypt('123456', gen_salt('bf')),
	'kevin',
	'ct',
	'902206316'	
);
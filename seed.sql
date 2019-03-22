DROP DATABASE IF EXISTS foodi;
CREATE DATABASE foodi;

c/ foodi;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL, 
  location VARCHAR NOT NULL, 
);

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  hometown_id INT REFERENCES cities (id) NOT NULL,
);

INSERT INTO users (userName, email, firstName, lastName, password) VALUES
('vvickyb', 'vickyb@gmail.com', 'victoria','buchanan', 12345678),
('rickybb', 'rickyb@gmail.com', 'ricky','tacos', 23456789),
('mikemyers', 'mikemyers@gmail.com', 'mike','myers', 'tacos123'),
('poppyj', 'poppyj@gmail.com', 'poppy','jones', '1abcde8')

INSERT INTO restaurants (name, hometown_id) 
DROP DATABASE IF EXISTS Foodi;
CREATE DATABASE Foodi;

c/ Foodi;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL, 
  location VARCHAR NOT NULL, 
);

CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  userName VARCHAR UNIQUE NOT NULL,
  location VARCHAR NOT NULL,
  TIMESTAMP
);

CREATE TABLE comments (
  userName VARCHAR UNIQUE NOT NULL,
  TIMESTAMP
)
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  userName VARCHAR UNIQUE NOT NULL,
);

INSERT INTO users (userName, email, firstName, lastName) VALUES
('vvickyb', 'vickyb@gmail.com', 'victoria','buchanan', 12345678),
('rickybb', 'rickyb@gmail.com', 'ricky','tacos', 23456789),
('mikemyers', 'mikemyers@gmail.com', 'mike','myers', 'tacos123'),
('poppyj', 'poppyj@gmail.com', 'poppy','jones', '1abcde8')


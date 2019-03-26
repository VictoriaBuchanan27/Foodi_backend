DROP DATABASE IF EXISTS foodi;
CREATE DATABASE foodi;

\c foodi;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL, 
  user_location VARCHAR NULL
);

-- CREATE TABLE post (
--   id SERIAL PRIMARY KEY,
--   userName VARCHAR REFERENCES users (userName) NOT NULL,
--   post_location VARCHAR NULL,
--   TIMESTAMP
-- );

-- CREATE TABLE comments (
--   userName VARCHAR REFERENCES users (userName) NOT NULL,
--   TIMESTAMP
-- );
-- CREATE TABLE likes (
--   id SERIAL PRIMARY KEY,
--   userName VARCHAR REFERENCES users (userName) NOT NULL
-- );

INSERT INTO users (userName, email, firstName, lastName) VALUES
('vvickyb', 'vickyb@gmail.com', 'victoria','buchanan'),
('rickybb', 'rickyb@gmail.com', 'ricky','tacos'),
('mikemyers', 'mikemyers@gmail.com', 'mike','myers'),
('poppyj', 'poppyj@gmail.com', 'poppy','jones')

